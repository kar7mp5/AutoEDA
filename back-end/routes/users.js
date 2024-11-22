// users.js
import express from "express";
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    res.send('this is user route'); // this gets executed when user visit http://localhost:3000/user
});

router.get('/101', (req, res) => {
    res.send('this is user 101 route'); // this gets executed when user visit http://localhost:3000/user/101
});

router.get('/102', (req, res) => {
    res.send('this is user 102 route'); // this gets executed when user visit http://localhost:3000/user/102
});

// Export the router module for use in server.js
export default router;
