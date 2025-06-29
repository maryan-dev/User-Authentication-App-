const express=require('express');
const dotenv= require('dotenv').config();
const mongoose=require('mongoose');
// const userrouter = require("./src/routers/user");
const userrouter=require('./src/routers/user');
const path = require('path');

const app= express();

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.json());

// Serve static files from Flutter build
app.use(express.static(path.join(__dirname, 'flutter_build')));

// API routes
app.use("/api",userrouter);

// Serve Flutter app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'flutter_build', 'index.html'));
});

//mangose
mongoose.connect(process.env.DB_URL)
    .then(() => console.log("DB successfully"))
    .catch(() => console.log("FAILD DB"));

//appka inaa dhageysano portga
app.listen(process.env.PORT,()=>{
    console.log(' PORT CONNECTED SUCCESSFULLY ' );
    
})