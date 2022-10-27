const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
name: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true  
},
speaker: {
    type: Array,
    required: true,
    unique: true
},
ticket: {
    price: String,
    currency: String, 
},
maxSeats: {
    type: Number,
    required: true  
},
bookedSeats: {
    type: Number
}
});

module.exports = mongoose.model('Event',eventSchema);
 