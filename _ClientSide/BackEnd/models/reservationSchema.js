const mongoose = require('mongoose');
const Reservation = mongoose.Schema({
    Nom: { type: String, required: true },
    Prenom: { type: String, required: true },
    Email: { type: String, required: true },
    DerniereReservation: { type: String, required:true },
    NombreReservation: { type: Number, required:true},
    Etat: { type: String, default:'Non traitée'},
},
    {
        versionKey: false,
        timestamps: true
    })

module.exports = mongoose.model('Reservation', Reservation, 'Reservation')