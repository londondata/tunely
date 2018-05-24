const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const AlbumSchema = newSchema ({
 artistName: String,
  name: String,
  releaseDate: String,
  genres: String,
})

const Album = mongoose.model('Album, AlbumSchema')

module.exports = Album;