# OCR Project
In this project, I made an OCR-project in which I used character-recognition to get the details of visiting cards, using npm-tesseract package, AWS-SDK secret-key and express framework of Nodejs, and shown the details on browser.

## Requirements
If you're using Linux on your system, you need to install the following packages on your terminal.
1. To install node-tesseract-ocr, type `npm install node-tesseract-ocr` <br>
2. To install express, type `npm install express` <br>
3. To install AWS-SDK, type `npm install aws-sdk` <br>

## Execution
Firstly, open this required directory on your terminal, and type `npm install` to install the required dependencies. <br> Now type `nodemon ocr.js` to start the localhost server. <br>
Now, go to the browser, and type http://localhost:1223/user_data to get the details from the visiting card.
