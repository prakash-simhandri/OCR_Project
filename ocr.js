var tesseract = require('node-tesseract-ocr');
const express = require('express')
var comprehend = require("comprehend");
var AWS = require("aws-sdk");
const app = express()
app.use(express.static(__dirname));

app.get("/front_page",(req, res)=>{
  res.sendFile(__dirname + '/Routes/front_page.html');
})

app.get('/user_get',(req, res)=>{
      const config={
        lan:"eng",
        oem:1,
        psm:3
      }
      AWS.config.update({
        accessKeyId: "AKIAJX5MFR26KWUJF65A",
        secretAccessKey: "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",
        region: 'us-east-1'
      });
      var comprehend = new AWS.Comprehend();

     tesseract.recognize("/home/pandu/Desktop/OCR/visiting-cards/card5.JPG",config)
      .then((data)=>{
        var params = {
            LanguageCode: 'en',
            TextList: [data]
          };
        comprehend.batchDetectEntities(params, function (err, data) {
          if (err){
            console.log(err, err.stack);   // get the an error occurred
          }else{
            // console.log(data.ResultList[0]);   // get the successful response
            let user_data = data.ResultList[0].Entities
            console.log(user_data)
          }
        });
    });
})

const run = app.listen(1223,()=>{
  console.log('Whelcom. App is listening :)')
})