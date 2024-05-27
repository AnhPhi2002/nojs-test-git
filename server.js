const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
const port = 3000;

// Kết nối tới MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`The server is running on the port ${port}`);
});
