const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

//middleware 
app.use(cors());
app.use(express.json());

//mongoDB user & password from .env
//.env এর মধ্যে যা থাকবে তা github এ পাঠানো যাবে না। এর জন্য .gitignore file এর মধ্যে দিতে হবে।
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

//mongoDB database config
const uri = `mongodb+srv://${user}:${pass}@cluster0.throxid.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close(); //এটা off করে রাখলে database সবসময় চলতে থাকবে।
    }
}
run().catch(console.dir);


//get 

app.get('/', (req, res) => {
    res.send('Coffee making server is running')
})

app.listen(port, () => {
    console.log(`Coffee Server Running on port : ${port}`)
})