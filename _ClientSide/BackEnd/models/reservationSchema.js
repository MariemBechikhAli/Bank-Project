const mongoose = require('mongoose');
const Reservation = mongoose.Schema({
    Nom: { type: String, required: true },
    Prénom: { type: String, required: true },
    Mail: { type: String, required: true },
    DerniereReservation: { type: Date, required:true },
    NombreReservation: { type: Number, required:true},
    Etat: { type: String, default:'Non traitée'},
    Hotel:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "hotel"
        }
    ]
},
    {
        versionKey: false,
        timestamps: true
    })

module.exports = mongoose.model('Reservation', Reservation, 'Reservation')