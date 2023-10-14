import express from "express";
const router = express.Router()
import { v4 as uuidv4 } from 'uuid';


// create a normal array with an objet
const users = []

router.get('/', (req, res)=> {
        res.send(users);
});

//sending data front frontend - Server
router.post('/', (req, res)=>{
        const user = req.body;

        users.push({...user, id: uuidv4()}); // users.push adding dat in to the DB  
      
        res.send(`User with the name ${user.firstName} added to the database`);
}); 

export default router; 