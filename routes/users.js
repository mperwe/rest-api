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
    console.log(users);
    res.send(users);
});

//sending data fron frontend - Server
router.post('/', (req, res)=>{
        console.log('POST ROUTE REACHED');
        res.send('POST ROUTE REACHED');
}); 

export default router; 