const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require("./schema/schema")
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
require('dotenv').config();
//allow cross-origin requests
const mongoDBURL = process.env.MongoDB_URL;
const port = process.env.PORT || 4000

app.use(cors());
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB database');
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(port,()=>{
    console.log("now listening for request on port %s",port)
});