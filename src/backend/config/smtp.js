const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

function sendEmail(destinary, subject, simpleContent, htmlContent = '') {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.gmail.com",
        service: 'gmail',
        secure: true,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        }
      });

    const message = {
        from: process.env.SMTP_EMAIL,
        to: destinary,
        subject: subject,
        text: simpleContent,
        html: htmlContent
    }

    transport.sendMail(message, function (error) {
        if (error) {
            return console.error(error);
        }
    })
}

module.exports = {
    sendEmail
}