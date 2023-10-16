import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router(); // Use an Express router 

// all routes in here are starting with /users
router.get('/', (req, res) => {res.send(users);});

let users = []
// Getting all Users.
router.get('/', (req, res) => {
        // console.log ('users');

        res.send(users);
});
 // adding users into the database.
router.post('/', (req, res) => {
         
        const user = req.body;

        // Generate a unique ID for the user

        users.push({ ...user, id:uuidv4() });
         
        res.send(`User with the name ${user.firstName} added to the database`);
    });
    
    // Getting the User ID.
router.get('/:id', (req , res)=> {
        const { id } = req.params;
        
         // Find the user with the specified ID
        const foundUser = users.find((user) => user.id === id);

        res.send(req.params);
});
        // Route to delete a user by ID
router.delete('/:id', (req, res)=>{
        const { id }= req.params;

        users = users.filter((user) =>user.id !== id);

        res.send(`User with ID ${id} deleted from the database.`);
});

export default router;  