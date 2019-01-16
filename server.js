const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const cors = require ('cors');

app.use(bodyParser.json());
app.use(cors());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


app.listen(8080, () => {
    console.log('Server is running in port 8080');
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/emailForm.html');
})

app.get('/emailForm', (req,res) => {
    res.sendFile(__dirname + '/emailForm.html');
    const email = req.query.email;
    const text = req.query.text;
    console.log("[" + email, text + "]");
    const sgMail = require('@sendgrid/mail');
    const msg = {
        to: email,
        from: 'test@example.com',
        subject: 'Sending with SendGrid is Fun',
        text: text,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
sgMail.send(msg);
    
})
