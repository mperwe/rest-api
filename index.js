import { express } from "express"; // import express
import bodyParser from "body-parser"; //  Allows to take in incoming post request bodies

const app = express();  // initialise our express application.
const PORT = 5000    // app port

app.use(bodyParser.json())

