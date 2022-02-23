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
    const userCollection = database.collection("usersCollection");
    // perform actions on the collection object

    // get all the appointments based on the patient email address
    app.get('/appointments', (req, res) => {
        const email = req.query.email;
        const date = new Date(req.query.date).toDateString();
        const query = { patientEmail: email, date: date };
        // console.log(date);
        appointmentCollection.find(query).toArray((err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    });

    // insert new appointment
    app.post('/appointments', (req, res) => {
        const appointment = req.body;
        const result = appointmentCollection.insertOne(appointment);
    });

    //INSERT NEW  user FROM SIGNUP
    app.post('/users', (req, res) => {
        const user = req.body;
        const result = userCollection.insertOne(user);
        // console.log(result);
        // res.send(result);
    });

    // update google sign in user
    app.put('/users', (req, res) => {
        const user = req.body;
        const query = { patientEmail: user.email };
        const options = { upsert: true };
        const update = { $set: user };
        const result = userCollection.updateOne(query, update, options); // returns a promise
        res.send(result);
    });

    // make an admin role create
    app.put('/users/admin', (req, res) => {
        const user = req.body;
        console.log('put', user);
        const query = { email: user.email };
        // const options = { upsert: true };
        const update = { $set: { role: 'admin' } };
        const result = userCollection.updateOne(query, update); // returns a promise
        res.send(result);
    });



    // client.close();
});

app.get('/', (req, res) => {
    res.send('Hello World of Doctors Chamber!')
})

app.listen(port, () => {
    console.log(`${port}`)
})