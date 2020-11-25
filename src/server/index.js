const dotenv = require('dotenv');
dotenv.config();

const fetch = require("node-fetch");
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const { Console } = require('console');
const app = express()

app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
 })

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
 
app.post('/addUser', async (req,res)=>{
  const lang = 'en';
  console.log(req.body);
  let url = `${process.env.API_ID}${process.env.API_KEY}&lang=${lang}&txt=${req.body.text}`;
  console.log(url);
    console.log(JSON.stringify(req.body));  
      const response = await fetch(url, {method: "POST"});  
      try {
        const data = await response.json();
        console.log(data);
        res.send(data);
      } catch (error) {
        console.log("error", error);
      }
    });

    




