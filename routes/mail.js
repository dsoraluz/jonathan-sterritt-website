const express = require('express');
const nodemailer = require('nodemailer');

const mailRouter = express.Router();

mailRouter.post('/contact', (req, res, next)=>{

let toFirstName = req.body.name;
let email = req.body.email;

let message = req.body.message;

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD
  }
});

let mailOptions = {
  from: `A new message from ${name} (JonathanSterritt.com)<${email}>`,
  to: `${process.env.GMAIL_USERNAME}`,
  subject: `Someone is looking for Jonathan Sterritt.`,
  html: `${message}`
};

transporter.sendMail(mailOptions, (err, info)=>{
    if (error){
      res.send(500);
      console.log(error);
      return;
    } else {
      console.log('Message %s sent: %s', info.messageId, info.response);
      transporter.close();
      res.redirect('/');
    }
  });
});

module.exports = mailRouter;
