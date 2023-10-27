const nodemailer=require('nodemailer')
const sgMail = require('@sendgrid/mail')
const OTP=require('../utilis/otpGnerator')();// direct get otp
require("dotenv").config();
const secret_Key = process.env.SENDGRID_API_KEY;


//**********************ETHEREAL Email Function for Development  ***************** */
// const sendEmail = async  (req,res)=>{
// let testAccount=await nodemailer.createTestAccount();
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         auth: {
//             user: 'stone43@ethereal.email',
//             pass: 'rGUMP2t3ZMXshKaw6q'
//         }
//     });

//     let info = await transporter.sendMail({
//         from: '"Zeeshan Saleem" <zeeshan.saleem@focusteck.com>',
//         to: 'chzeeshan@gmail.com',
//         subject: 'Focusteck Expert',
//         html: '<h2>Sending Emails with Node.js</h2>',
//       });
    
//       res.json(info);
//     res.send("send email functionality")
// }


//**********************SENDGRID Email Function ***************** */
const sendEmail=async(req, res) => {
    console.log(secret_Key);
   sgMail.setApiKey(secret_Key)
    const msg = {
        to: 'zeeshan.saleem@focusteck.com', // Change to your recipient
        from: 'chzeeshan1322@gmail.com', // Change to your verified sender
        subject: 'Focusteck Expert',
        html: `here is Zeeshan Expert For every problem and here is your OTP Code <strong> ${OTP}</strong>`,
      }
     const info= await sgMail.send(msg)
     res.json(info)
}
const test= async (req,res)=>{
    console.log("hello  world");
}
module.exports = {
    sendEmail,test
}