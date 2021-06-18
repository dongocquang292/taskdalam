const express = require('express');
const booksController = require('../controllers/book.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post("/", checkAuthMiddleware.checkAuth, booksController.save);
router.get("/", booksController.index);
router.get("/:id", booksController.show);
router.patch("/:id", checkAuthMiddleware.checkAuth, booksController.update);
router.delete("/:id", checkAuthMiddleware.checkAuth, booksController.destroy);

module.exports = router;
