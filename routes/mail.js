const express = require('express');
const nodemailer = require('nodemailer');

const mailRouter = express.Router();

mailRouter.post('/contact', (req, res, next)=>{
  
  let name = req.body.name;
  
  let email = req.body.email;
  
  let message = req.body.message;

      
  let transporter = nodemailer.createTransport({
    host: 'gator4138.hostgator.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  
  let mailOptions = {
    from: `A new message from ${name}<${email}>`,
    to: `${process.env.EMAIL_USERNAME}`,
    subject: `Someone is looking for Jonathan Sterritt.`,
    html: `${message}`
  };
  transporter.sendMail(mailOptions, (err, info)=>{
    if (err){
      // res.sendStatus(500);
      console.log(err);
      return;
    } else {
      console.log('Message %s sent: %s', info.messageId, info.response);
      transporter.close();
    }
  });
  res.redirect('/message-confirmation');
});


mailRouter.get('/message-confirmation', (req,res,next)=>{
  res.render('message-confirmation');

});

module.exports = mailRouter;
