const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservationSchema');
const Hotel = require('../models/hotelSchema');
const passport = require('passport');
const nodemailer = require("nodemailer");
const env = require('dotenv');

router.post('/add-reservation/:id', async(req,res)=>{
    const hotel = await Hotel.findById(req.params.id);
    if(req.body.NombreReservation <= hotel.Places){
        const createReservation = await Reservation.create(req.body);
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$push:{Reservations:createReservation._id}},{new:true})
    res.status(200).json({message: 'Reservation created'});
    }else{
        res.status(400).json({message:'Error occured! the number of places is higher than recommended'})
    }
});

router.get('/reservation-list', async(req,res)=>{
    const reservationsList = await Hotel.findById(Hotel._id).populate("reservations");
    res.json(reservationsList.Reservations);
});

router.put('/accept-reservation/:id', async(req,res)=>{
    console.log(req.params.id);
    const acceptReservation = await Hotel.findByIdAndUpdate(req.params.id,{"$inc":{Places: - req.body.NombreReservation} },{new: true});
    const changeEtat = await Reservation.findByIdAndUpdate(req.params.id,{ Etat :true },{new: true});
    console.log(acceptReservation);
    /* 
        Send Mail about accepting reservation
    */
    res.json({message: 'Reservation accepted! '});
});

router.put('/refuse-reservation/:id', async(req,res)=>{
    const refuseReservation = await Reservation.findByIdAndUpdate(req.params.id,{Etat: false},{new: true});
    /* 
        Send Mail about refusing reservation
    */
    res.json({message: 'Reservation refused! '});
});

router.delete('/delete-reservation/:id', async(req,res)=>{
    const deleteReservation = await Reservation.findByIdAndDelete(req.params.id);
    const updatedReservationFromHotel = await Hotel.findByIdAndUpdate(Hotel._id,{$pull:{Reservations:deleteReservation._id}},{new:true})
    res.json({message: 'Deleted successefuly'});
})

module.exports = router;