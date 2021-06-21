const db = require("../models");
const Employee = db.employee;

// Thêm vào 1 nhân viên mới
exports.create = (req, res) => {
    // nếu để trông tên sẽ báo ra lỗi 
    if (!req.body.name) {
      res.status(400).send({
        message: "Không đc để trống tên"
      });
      return;
    }
  
    const employee = {
      name: req.body.name,
      age: req.body.age,
      address: req.body.address
    };
  
    // Lưu nhân viên vào DB
    Employee.create(employee)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({ // Mã lỗi 500 là mã lỗi server
          message:
            err.message || "Lỗi"
        });
      });
};

// Lấy tất cả các nhân viên
exports.findAll = (req, res) => {
    Employee.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Lỗi"
        });
      });
};

// Tìm 1 nhân viên với id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Employee.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Lỗi tìm kiếm với id = " + id
        });
      });
};

// Update 1 nhân viên với id
exports.update = (req, res) => {
    const id = req.params.id;
  
    Employee.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Nhân viên đã được update"
          });
        } else {
          res.send({
            message: `Không update được nhân viên với id = ${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Lỗi update id = " + id
        });
      });
};

// Xóa nhân viên với id
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Employee.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Nhân viên đã được xóa"
          });
        } else {
          res.send({
            message: `Không thể xóa nhân viên với id = ${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Lỗi server với id = " + id
        });
      });
};

// Xóa tất cả các nhân viên
exports.deleteAll = (req, res) => {
    Employee.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tất cả các nhân viên đã bị xóa` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Lỗi khi xóa nhân viên"
        });
      });
};
