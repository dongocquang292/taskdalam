const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res) {

    //Sign up
    models.User.findOne({ where: { email: req.body.email } }).then(result => {
        if (result) {
            res.status(409).json({
                message: "Email da ton tai",
            });
        } else {
            bcryptjs.genSalt(10, function (err, salt) {
                bcryptjs.hash(req.body.password, salt, function (err, hash) {
                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    }

                    models.User.create(user).then(result => {
                        res.status(201).json({
                            message: "Da tao user thanh cong",
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "Loi !",
                        });
                    });
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Loi !",
        });
    });
}


function login(req, res) {
    models.User.findOne({ where: { email: req.body.email } }).then(user => {
        if (user === null) {
            res.status(401).json({
                message: "Nhap sai email hoac password",
            });
        } else {
            bcryptjs.compare(req.body.password, user.password, function (err, result) {
                if (result) {
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, process.env.JWT_KEY, function (err, token) {
                        res.status(200).json({
                            message: "Xác thực thành công",
                            token: token
                        });
                    });
                } else {
                    res.status(401).json({
                        message: "Nhap sai email hoac password",
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Loi !",
        });
    });
}


module.exports = {
    signUp: signUp,
    login: login
}