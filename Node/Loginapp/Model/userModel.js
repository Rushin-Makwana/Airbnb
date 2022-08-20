const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
name: String, 
email: String,
password: String,
phone: String,
})
mongoose.model('users', userSchema)({
    fields:userSchema.Type
   }, { collection: 'bookings'});

module.exports = mongoose.model('users')