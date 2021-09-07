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

// Update Personel
router.put('/update-personel/:id', async(req,res)=>{
    bcrypt.hash(req.body.Password, saltRounds, async (error, hash)=>{
  //      if (error) {
  //          console.log(error);
 //           res.status(500).json({message: 'Server error!'});
  //      }else{
            req.body.Password = hash;
            req.body.Valide = true;
            const updatePersonel = await Personel.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.json(updatePersonel);
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
            res.status(200).json({ message: 'Logged in successfully', token: createdToken });
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


router.route("/:id").get((req, res) => {
    Personel.findById(req.params.id)
      .then((personnel) => res.json(personnel))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  
module.exports = router 