const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/lib");
const Schema = mongoose.Schema;
var ReviewSchema = new Schema({
    proName: String,
    proAuth: String,
     proGenre: String,
     proDesc: String,
   
});
var Reviewdata = mongoose.model('review',ReviewSchema);
module.exports  = Reviewdata;