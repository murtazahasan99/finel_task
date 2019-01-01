const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
        },
        author : {
            type:String,
            required:true
        },
        imageUrl: {
            type:String,
           
        },
        publish :Date,
        PdfUrl: {
            type:String,
           
        }
    });
    module.exports = mongoose.model('Book', bookSchema);