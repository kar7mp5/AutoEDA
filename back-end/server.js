// server.js
import express from "express";
import usersRoute from './routes/users.js';
import productsRoute from './routes/products.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

// Use routes
app.use('/users', usersRoute);
app.use('products', productsRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});