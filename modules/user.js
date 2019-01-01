const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
        },
        age:Number,
        password: {
            type:String,
            required:true
        },
        email: {
            type:String,
            required:true
        },
        admin:Boolean
    });
    module.exports = mongoose.model('User', userSchema);