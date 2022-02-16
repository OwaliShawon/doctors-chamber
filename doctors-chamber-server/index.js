const express = require('express')
const app = express()
const cors = require('cors'); // Cross-Origin Resource Sharing
require('dotenv').config();
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.igzrb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const database = client.db("doctor_DB_chamber");
    const appointmentCollection = database.collection("appointmentsCollection");
    // perform actions on the collection object
    app.post('/appointments', (req, res) => {
        const appointment = req.body;
        // console.log(appointment);
        // res.json({ message: 'success' });
        const result = appointmentCollection.insertOne(appointment);
        res.json(result);
    })



    // client.close();
});

app.get('/', (req, res) => {
    res.send('Hello World of Doctors Chamber!')
})

app.listen(port, () => {
    console.log(`${port}`)
})