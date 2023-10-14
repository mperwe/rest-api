import express from "express";
const router = express.Router()

// create a normal array with an objet
const users = [
    {
        firstName: "Simon",
        lastname: "Peter",
        age : "66"
    },
    {
        firstName: "Jane",
        lastname: "Johns",
        age : "66"
    }
]
router.get('/', (req, res)=> {
    //console.log(users);
    res.send(users);
});

//sending data front frontend - Server
router.post('/', (req, res)=>{
        const user = req.body;
        //console.log('user');
        users.push(user); // users.push adding dat in to the DB  
      
        res.send(`User with the name ${user.firstName} added to the database`);
}); 

export default router; 