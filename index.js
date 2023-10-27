const express= require('express');
const {sendEmail}= require('./Controller/sendEmail')
const app = express();

app.use(express.json());
app.get('/', (req,res)=>{
    res.send(`<h1>nodemailer</h1> <br> <a href="/send">send email</a>`)
})
app.get('/send',sendEmail)
app.use(express.urlencoded({ extended: true }));
app.listen(5000,()=>{
    console.log("server is running on 5000")
})