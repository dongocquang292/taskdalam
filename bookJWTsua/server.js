const express = require('express');
const initRoutes = require("./app/routes/routesUser");
const connectDB = require('./app/config/connectDB');

const app = express();
app.use(express.json());

app.use('/', initRoutes)

connectDB();


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Đang chạy trên cổng: ${PORT}`);
});

