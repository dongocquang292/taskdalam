const express = require('express');
const db = require("./app/models");
const booksRoute = require('./app/routes/book');
const userRoute = require('./app/routes/user');


const app = express();

app.use(express.json());
app.use("/books", booksRoute);
app.use("/user", userRoute);



db.sequelize.sync().then(() => {
    console.log("Đã kết nối DB");
});;

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Đang chạy trên cổng: ${PORT}`);
});

