const express = require('express');
const router = express.Router();
const path = require('path');
const Personel = require('../models/personelSchema');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require("nodemailer");
const env = require('dotenv');
const multer = require("multer");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,"../FrontEnd/public/uploads/ExtriatsNaissance");
    },
    filename: (req, file, cb) => {
      cb(null, "ExtriatsNaissance--" + file.originalname);
    },
  });
  
  var upload = multer({ storage: storage });

// Update Personel
router.post('/update-personel/:id',upload.single("Enfant"), async(req,res)=>{
    bcrypt.hash(req.body.Password, saltRounds, async (error, hash)=>{
  //      if (error) {
  //          console.log(error);
 //           res.status(500).json({message: 'Server error!'});
  //      }else{
    Personel.findById(req.params.id)
    .then((pers) => {
        pers.RIB = req.body.RIB;
        pers.Numero_telephonique = req.body.Numero_telephonique;
        pers.Nbre_enfants = req.body.Nbre_enfants;
        pers.Etat_matrimoniale = req.body.Etat_matrimoniale;
        pers.Agence = req.body.Agence;
        pers.NOM = req.body.NOM;
        pers.Email = req.body.Email;
        pers.CIN = req.body.CIN;
        pers.Post = req.body.Post;
        pers.Password = hash;
        pers.Valide = true;
        pers.Enfant = req.file.originalname;
      pers.save().then(() => res.json( pers));
    })
    .catch((err) => res.status(400).json("Error: " + err));
  //      };
    })
});

router.post('/login', async (req, res) => {
    const loginPersonel = await Personel.findOne({ Email: req.body.Email });
    if (loginPersonel != null) {
        const validPassword = await bcrypt.compare(req.body.Password, loginPersonel.Password);
        if (validPassword) {
            const tokenData = {
                PersonelNOM: loginPersonel.NOM,
                PersonelID: loginPersonel._id,
                PersonelPost: loginPersonel.Post,
                PersonelEmail: loginPersonel.Email
            }
            const createdToken = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.EXPIRE });
            res.status(200).json({ message: 'Logged in successfully', token: createdToken, Personel: loginPersonel.Valide })
        } else {
            res.status(400).json({ message: 'Please verify your E-mail or Password' });
        }
    } else {
        res.status(400).json({ message: 'Please verify your E-mail or Password' });
    }
});

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    res.json({ message: 'Logged out!' })
});

//one user
router.route("/:id").get((req, res) => {
    Personel.findById(req.params.id)
      .then((personnel) => res.json(personnel))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  
module.exports = router 