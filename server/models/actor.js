const mongoose = require('mongoose');
const Schema = mongoose.Schema

const actorSchema = new Schema({
name:String
})

module.exports = mongoose.model('Actor',actorSchema)