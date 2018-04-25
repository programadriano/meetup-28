var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/db_videos');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }   
});


var User = mongoose.model('User', userSchema);
module.exports = User;

