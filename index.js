import express from "express";
import bodyParser from "body-parser"; //  Allows to take in incoming post request bodies

import usersRoutes from './routes/users.js';

const app = express();  // initialise our express application.
const PORT = 4500    // application port

app.use(bodyParser.json());

app.use('/users', usersRoutes); 

//create route
app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));







