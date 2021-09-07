const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservationSchema');
const Hotel = require('../models/hotelSchema');
const passport = require('passport');
const nodemailer = require("nodemailer");
const env = require('dotenv');

router.post('/add-reservation/:id', async(req,res)=>{
    const hotel = await Hotel.findById(req.params.id);
    console.log(hotel);
    req.body.HotelID = req.params.id
    if(req.body.NombreReservation <= hotel.Places){
        req.body.HotelID = req.params.id
        const createReservation = await Reservation.create(req.body);
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$push:{Reservations:createReservation._id}},{new:true})
    res.status(200).json({message: 'Reservation created'});
    }else{
        res.status(400).json({message:'Error occured! the number of places is higher than recommended'})
    }
});

router.delete('/delete-reservation/:id', async(req,res)=>{
    const deleteReservation = await Reservation.findByIdAndDelete(req.params.id);
    const updatedReservationFromHotel = await Hotel.findByIdAndUpdate(Hotel._id,{$pull:{Reservations:deleteReservation._id}},{new:true})
    res.json({message: 'Deleted successefuly'});
})

module.exports = router;