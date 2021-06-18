const Validator = require('fastest-validator');
const models = require('../models');

function save(req, res) {
    const book = {
        title: req.body.title,
        content: req.body.content,
        userId: 1
    }

    const schema = {
        title: { type: "string", optional: false, max: "100" },
        content: { type: "string", optional: false, max: "500" },
    }

    const v = new Validator();
    const validationResponse = v.validate(book, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Xác thực không thành công",
            errors: validationResponse
        });
    }

    models.Book.create(book).then(result => {
        res.status(201).json({
            message: "Book created thanh cong",
            book: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Loi !",
            error: error
        });
    });
}

function show(req, res) {
    const id = req.params.id;

    models.Book.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Sach !"
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "Loi !"
        })
    });
}


function index(req, res) {
    models.Book.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Loi !"
        });
    });
}


function update(req, res) {
    const id = req.params.id;
    const updatedBook = {
        title: req.body.title,
        content: req.body.content,
    }

    const userId = 1;

    const schema = {
        title: { type: "string", optional: false, max: "100" },
        content: { type: "string", optional: false, max: "500" }
    }

    const v = new Validator();
    const validationResponse = v.validate(updatedBook, schema);

    if (validationResponse !== true) {
        return res.status(400).json({
            message: "Xác thực không thành công",
            errors: validationResponse
        });
    }

    models.Book.update(updatedBook, { where: { id: id, userId: userId } }).then(result => {
        res.status(200).json({
            message: "Book update thanh cong",
            book: updatedBook
        });
    }).catch(error => {
        res.status(200).json({
            message: "Loi !",
            error: error
        });
    })
}


function destroy(req, res) {
    const id = req.params.id;
    const userId = 1;

    models.Book.destroy({ where: { id: id, userId: userId } }).then(result => {
        res.status(200).json({
            message: "Book deleted thanh cong"
        });
    }).catch(error => {
        res.status(200).json({
            message: "Loi !",
            error: error
        });
    });
}


module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy
}
