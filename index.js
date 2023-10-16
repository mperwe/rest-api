import express from "express";

import bodyParser from "body-parser"; // Allows to take in incoming post request bodies

import usersRoutes from './routes/users.js';

const app = express();  // Create an Express application
const PORT = 4500    // application port

app.use(bodyParser.json()); // Middleware to parse JSON request bodies

app.use('/users', usersRoutes);  

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
 
// Route to get all users
app.get('/', (req, res) => res.send('Hello from Home page'));



