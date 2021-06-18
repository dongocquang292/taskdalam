const User = require('../models/user');
const jwt = require('jsonwebtoken');
// require('dotenv').config();

module.exports = {
    createUser: async (req, res) => {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }

        await User.findOne({ where: { email } }).then(result => {
            if (result) {
                res.send('User da ton tai')
            }
        })
        await User.create(user).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Lỗi"
            })
        });

    },


    getAll: async (req, res) => {
        await User.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Lỗi"
                });
            });
    },

    getOneUser: async (req, res) => {
        const id = req.params.id;
        await User.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Lỗi tìm kiếm với id = " + id
                });
            });
    },

    updateUser: async (req, res) => {
        const id = req.params.id;
        await User.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "user đã được update"
                    });
                } else {
                    res.send({
                        message: `Không update được user với id = ${id}`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Lỗi update id = " + id
                });
            });
    },

    deleteUser: async (req, res) => {
        const id = req.params.id;

        await User.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "user đã được xóa"
                    });
                } else {
                    res.send({
                        message: `Không thể xóa user với id = ${id}`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Lỗi server với id = " + id
                });
            });
    },

    // loginUser: async (req, res) => {
    //     await User.findOne({ where: { email } }).then(result => {
    //         if (result) {
    //             res.send('Khong tim thay email')
    //         }
    //         const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: process.env.EXPIRES_IN })
    //         response.data = token;
    //     }).catch(err => {
    //         res.status(500).send({
    //             message: "Lỗi"
    //         });
    //     })

    // }
}
