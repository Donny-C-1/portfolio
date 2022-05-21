var express = require('express');
var router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');

/* GET home page. */

router.post('/', function(req, res, next) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'chikwemdonald@gmail.com',
      pass: 'nhwafgqwivtobelm'
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let mailOptions = {
    from: 'chikwemdonald@gmail.com',
    to: req.body.mail,
    subject: req.body.topic,
    text: `
    From: ${req.body.fname} \n
    mail: ${req.body.mail} \n
    Phone no: ${req.body.number} \n\n
    ${req.body.message}
    `
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.redirect('/');
})

router.get('/:nav', function(req, res, next) {
  let options = {
    root: path.join(__dirname, '../public'),
    dotfiles: 'allow'
  }
  res.sendFile('index.html', options, function(err) {
    if (err) {
      next(err);
    } else {
      console.log(`URL: ${req.url} loaded successfully`)
    }
  })
})

module.exports = router;
