import express from "express";
import bodyParser from "body-parser"; //  Allows to take in incoming post request bodies

const app = express();  // initialise our express application.
const PORT = 5000    // application port

app.use(bodyParser.json());

//create route
app.get('/', (req , res)=>{
    console.log('[TEST]!');
    res.send('Hello from Homepage.');

});

app.listen(PORT, ()=> console.log (`Server running on port: http://localhost:${PORT}`))







