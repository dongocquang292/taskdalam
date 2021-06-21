module.exports = app => {
    const employees = require("../controllers/employees.controller.js");
  
    var router = require("express").Router();
  
    // Tạo 1 nhân viên với
    router.post("/", employees.create);
  
    // Lấy ra tất cả nhân viên trong bảng
    router.get("/", employees.findAll);
  
    // Lấy ra 1 nhân viên với id
    router.get("/:id", employees.findOne);
  
    // Sửa 1 nhân viên với id
    router.put("/:id", employees.update);
  
    // Xóa 1 nhân viên với id
    router.delete("/:id", employees.delete);
  
    // Xóa tất cả các nhân viên
    router.delete("/", employees.deleteAll);
  
    app.use('/api/employees', router);
};