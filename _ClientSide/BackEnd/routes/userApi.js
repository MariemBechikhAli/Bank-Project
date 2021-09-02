const express = require('express');
const router = express.Router();
const Personel = require('../../../_AdminSide/BackEnd/models/personelSchema');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require("nodemailer");
const env = require('dotenv');

// Update Personel
router.put('/update-personel/:id', async(req,res)=>{
    const updatePersonel = await Personel.findByIdAndUpdate(req.params.id,req.body,{new: true});
    bcrypt.hash(req.body.Password, saltRounds, async (error, hash)=>{
        if (error) {
            res.status(500).json({message: 'Server error!'});
        }else{
            req.body.Password = hash;
            req.body.Valide = true;
        };
        res.json(updatePersonel);
    })
});

//Sign In
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
})

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    res.json({ message: 'Logged out!' })
});


module.exports = router 