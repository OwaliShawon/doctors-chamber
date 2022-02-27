const express = require('express')
const app = express()
const cors = require('cors'); // Cross-Origin Resource Sharing
require('dotenv').config();
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 5000

// doctors-chamber-jm-firebase-adminsdk.json
const admin = require("firebase-admin");

const serviceAccount = require("./doctors-chamber-jm-firebase-adminsdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.igzrb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const database = client.db("doctor_DB_chamber");
    const appointmentCollection = database.collection("appointmentsCollection");
    const userCollection = database.collection("usersCollection");
    // perform actions on the collection object

    // verify firebase admin token
    function verifyToken(req, res, next) {
        const idToken = req.headers.authentication.split(' ')[1];
        admin.auth().verifyIdToken(idToken)
            .then(function (decodedToken) {
                const uid = decodedToken.uid;
                // console.log(uid);
                req.uid = uid;
                next();
            })
            .catch(function (error) {
                console.log(error);
                res.status(403).send('Unauthorized');
            });
    }

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
    app.post('/appointments', verifyToken, (req, res) => {
        const appointment = req.body;
        const result = appointmentCollection.insertOne(appointment);
    });

    // is admin or not
    app.get('/users/:email', (req, res) => {
        const email = req.params.email;
        const query = { email: email };
        const user = userCollection.findOne(query)
            .then(result => {
                console.log(result);
                let isAdmin = false;
                if (result?.role === 'admin') {
                    isAdmin = true;
                }
                res.send({ admin: isAdmin });
            });
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
    app.put('/users/admin', verifyToken, (req, res) => {
        const user = req.body;
        const requester = req.uid;
        if (requester) {
            const requesterAccount = userCollection.findOne({ _id: requester });
            if (requesterAccount.role === 'admin') {
                const query = { email: user.email };
                const update = { $set: { role: 'admin' } };
                const result = userCollection.updateOne(query, update);
                res.send(result);
            } else {
                res.status(403).send('Unauthorized');
            }
        }
        // console.log('put', req.uid);
        // const query = { email: user.email };
        // const options = { upsert: true };
        // const update = { $set: { role: 'admin' } };
        // const result = userCollection.updateOne(query, update); // returns a promise
        // res.send(result);
    });



    // client.close();
});

app.get('/', (req, res) => {
    res.send('Hello World of Doctors Chamber!')
})

app.listen(port, () => {
    console.log(`${port}`)
})