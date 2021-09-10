const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotelSchema');
const Reservation = require('../models/reservationSchema')
const passport = require('passport');
const nodemailer = require("nodemailer");
const env = require('dotenv');
const multer = require('multer')

const myStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        const folder = path.resolve('./telechargements');
        cb(null,folder);
    },
    filename: async(req,file,cb) => {
        const extension = path.extname(file.originalname) ;
        const newFileName = Date.now() + extension;
        await Hotel.findByIdAndUpdate(req.params.id,{Image: newFileName},{new:true})
        cb(null,newFileName);
    },
    
});
const fileFilter = (req, file, cb) => {
    const allowedFileExtensions = ['.png','.jpeg','.jpg']
    const extension = path.extname(file.originalname) ;
    cb(null, allowedFileExtensions.includes(extension));
}
const upload = multer({ 
    storage: myStorage,
    fileFilter: fileFilter,
    limits:{
        fileSize: 52428800,
    },
});

//Add Hotel
router.post('/addHotel', async (req, res) => {
    const createHotel = await Hotel.create(req.body);
    res.json({message: 'Hotel created!'})
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