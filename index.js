import express from "express";
import bodyParser from "body-parser"; //  Allows to take in incoming post request bodies

const app = express();  // initialise our express application.
const PORT = 5000    // app port

app.use(bodyParser.json());

app.listen(PORT, ()=> console.log (`Server running on port: http://localhost:${PORT}`))





