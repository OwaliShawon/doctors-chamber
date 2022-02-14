const express = require('express')
const app = express()
const cors = require('cors'); // Cross-Origin Resource Sharing
require('dotenv').config();
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 5000

app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.igzrb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log("db connection success");
    client.close();
});

app.get('/', (req, res) => {
    res.send('Hello World of Doctors Chamber!')
})

app.listen(port, () => {
    console.log(`${port}`)
})