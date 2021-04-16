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
    refreshToken:
      '1//04cL8hBjN0Y1XCgYIARAAGAQSNwF-L9IrMtu9syminMW2nSb5WoUcnK2G1dOPOw2Kh2KXm7v3rXCx7iO8g9mIE3Uhp1o0y32Uddg',
    accessToken:
      'ya29.a0AfH6SMDIB5zQbUU9m74ry5Zo4iyhQM0FTZtnKP4zT0JB70kee5IAmuLyzkF8Lq5dlPtjxqKbVTS7MVK7zGay9bML8S6xTxJ3EPuUFhevVVNpn2rLazwnkWoAbpN7H_A7bQN1YZGGSLYJ-lpXFIQihR3JcY9e',
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
