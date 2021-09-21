const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotelSchema');
const Reservation = require('../models/reservationSchema')
const passport = require('passport');
const nodemailer = require("nodemailer");
const env = require('dotenv');
const multer = require("multer");

var myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,"../FrontEnd/public/HotelImages");
    },
    filename: (req, file, cb) => {
      cb(null, "Hotel--" + file.originalname);
    },
  });

 // var upload = multer({ storage: storage });
const upload = multer({ 
    storage: myStorage,
    limits:{
        fileSize: 52428800,
    },
});

//Add Hotel
router.post('/addHotel',upload.single("Photo"), async (req, res) => {
    try{
    const newHotel = new Hotel({
        NOM: req.body.NOM,
        question_date: new Date(),
        Emplacement: req.body.Emplacement,
        DateDebut: req.body.DateDebut,
        Photo: req.file.originalname,
        Places:req.body.Places,
        Lien:req.body.Lien,
        Etoiles:req.body.Etoiles,
        Prix:req.body.Prix
      });
    const hotel = await newHotel.save();
    res.json(hotel);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Get Hotel List
router.get('/hotel-list', async (req, res) => {
    const hotels = await Hotel.find();
    res.json(hotels);
});

// Update Hotel
router.put('/update-hotel/:id', upload.single('Image'), async(req,res)=>{
    const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,req.body,{new: true});
    res.json(updateHotel);    
});

// Delete Hotel
router.delete('/delete-hotel/:id', async(req,res)=>{
    const deleteHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.json({message: 'Supprimé avec succés! '});
})

router.get('/reservation-list', async(req,res)=>{
    const reservationsList = await Hotel.findById(Hotel._id).populate("reservations");
    res.json(reservationsList.Reservations);
});

router.put('/accept-reservation/:id', async(req,res)=>{
    const reservation = await Reservation.findOne({_id:req.params.id});
    const HotelFound = await Hotel.findOne({_id: reservation.HotelID});
    const PlacesRestantes = HotelFound.Places - reservation.NombreReservation;
    const acceptReservation = await Hotel.findByIdAndUpdate(HotelFound._id, {Places: PlacesRestantes},{new: true});
    const changeEtat = await Reservation.findByIdAndUpdate(req.params.id, { Etat :true },{new: true});
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

module.exports = router;