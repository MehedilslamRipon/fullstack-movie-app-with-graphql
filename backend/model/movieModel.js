const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
   id: Number,
   name: String,
   photo: String,
   type: String,
   year: String,
});

module.exports = new mongoose.model('Movies', movieSchema);
