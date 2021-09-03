const express = require('express');
const router = express.Router();
const path = require('path');
const Personel = require('../../../_AdminSide/BackEnd/models/personelSchema');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require("nodemailer");
const env = require('dotenv');

// Update Personel
router.put('/update-personel/:id', async(req,res)=>{
    const updatePersonel = await Personel.findByIdAndUpdate(req.params.id, req.body, {new: true});
    bcrypt.hash(req.body.Password, saltRounds, async (error, hash)=>{
        if (error) {
            console.log(error);
            res.status(500).json({message: 'Server error!'});
        }else{
            req.body.Password = hash;
            req.body.Valide = true;
        };
        res.json(updatePersonel);
    })
});


module.exports = router 