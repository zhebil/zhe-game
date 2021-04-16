const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: 'jbilyk1996@gmail.com', // Your email id
    pass: process.env.PASS, // Your password
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

var mailOptions = {
  from: 'Foo Bar ✔ <foobar@gmail.com>',
  to: 'Hi <frontvalley.community@gmail.com>',
  subject: 'Hello ',
  text: 'Hello✔',
  html: '<p>Hello  </p>',
  bcc: 'fred@gmail.com',
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Message sent: ' + info.response);
  }
});
