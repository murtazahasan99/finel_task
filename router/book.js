const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../modules/book');
const uuidv1 = require('uuid/v1');



router.get('/', (req, res) => {
   
    Book.find().then(result =>{
        res.send(result);
    }).catch(err => {
      res.status(400).send(err)
    })

  });

  router.post('/add',(req,res)=>{
      console.log("hello")
    let image = req.files.img;
    let pdf= req.files.pdf;

    imgName = uuidv1();
    pdfName = uuidv1();
    image.mv(`./files/${imgName}.png`, function(err) {
        if (err)
          return res.status(500).send("img");

      });
      pdf.mv(`./files/${pdfName}.pdf`, function(err) {
        if (err)
          return res.status(500).send("pdf");

      });
      const book =new Book({
        _id: new mongoose.Types.ObjectId(),
        title:req.body.title,
        author:req.body.author,
        imageUrl:imgName+'.png',
        publish:req.body.publish,
        PdfUrl:pdfName+'.pdf',
      })
      book.save().then(result=>{
          res.send("the book has been uploded");
      })

    
  })

  module.exports = router;