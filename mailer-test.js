const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: 'jbilyk1996@gmail.com', // Your email id
    pass: 'jeka2902', // Your password
    clientId:
      '842548504207-kp3slju4uahhft4gi2c7k51f2rfm6tth.apps.googleusercontent.com',
    clientSecret: 'kCNsXyuLx8BRK-rlYJNI7tQN',
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
