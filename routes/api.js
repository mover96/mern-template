var express = require('express');
var bodyParser = require('body-parser');

//Mongoose models
var Test = require('../config/models/test');

var router = express.Router();

router.get('/', function(req, res) {
    Test.find({ }, function(error, posts){
        if (error) {
          res.json( {success: 'false', error: error} );
        }
        res.json({success : 'true', test : posts });
    });
});

router.post('/', function(req, res) {
    var newTest = Test({
      Time : Date.now()
   });

   newTest.save(function(error) {
      if (error) {
          res.json( {success: 'false', error: error} );
      }
      console.log('Added database object');
      res.json( {success : 'true'} );
   });
});



module.exports = router;