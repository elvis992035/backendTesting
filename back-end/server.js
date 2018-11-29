//  First - create the server in port 4000 with express

const express = require('express');
const app = express();
const path = 4000;

app.listen(path,() => console.log("server is running in port 4000"));

//  Second - connect to the mongoDB

const mongoose = require('mongoose');

mongoose.connect(

    'mongodb+srv://elvis992035:FLCWKJqJy6BtH8Su@cluster0-wvkpb.mongodb.net/test?retryWrites=true', 

    { useNewUrlParser: true }

)
.then(() => {
    console.log('connected to database');
})
.catch(err => {
    console.log('connection failed', err);
});

mongoose.set('useCreateIndex', true);

// const userRouter = require('/routing/user.js');
// const dataRouter = require('./routing/data');
