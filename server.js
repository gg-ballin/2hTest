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

app.get('/myaction', (req,res) => {
    
})