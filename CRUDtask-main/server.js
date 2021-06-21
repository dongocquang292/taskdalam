const express = require("express");
const db = require("./app/models");
const app = express();
const routes = require("./app/routes/employees.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Sử dụng api CRUD " });
});

db.sequelize.sync().then(() => {
  console.log("Đã kết nối DB");
});;

routes(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Đang chạy trên cổng: ${PORT}`);
});