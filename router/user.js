const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../modules/user');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');






router.post('/register', (req, res) => {
    //  VALIDATION
    console.log("hello from register")
    bcrypt.genSalt(10).then(salt => {
      bcrypt.hash(req.body.password, salt).then(hashed => {
        const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          age: req.body.age,
          password: hashed,
          email: req.body.email,
          admin:req.body.admin || false
        });
        user.save().then(result => {
          const token = jwt.sign({_id: result._id}, 'koko');
          res.header({'x-auth-token': token}).send('New user has been added');
        }).catch(err => {
          res.send(err);
        })
      })
    });
  });






  router.post('/login', (req, res) => {
    //  check if there is a user data (username & password) in the req body
    const validating = userValidating(req.body);
    if(validating.error){
      res.status(400).send(validating.error);
    }else {
      //  chekc if there is such email get the user info
      User.findOne({email: req.body.email})
      .then(result => {
        //  check if the password valid
        bcrypt.compare(req.body.password, result.password, function(err, response) {
          if(response){
            const token = jwt.sign({ "_id": result._id }, 'koko');
            res.header({'x-auth-token': token}).send(token);
          }else{
            res.status(400).send('you have tried an incorect credentials');
          }
        });
      }).catch(err => {
        res.status(404).send('there is no such user');
      });
    }
    //  create a new token and send it back to the user in the response header
  });
  


  function userValidating(user) {
    const userSchema = {
      'email': Joi.string().min(3).required(),
      'password': Joi.string().min(3).required()
    };
    return Joi.validate(user, userSchema);
  }

  module.exports = router;
  