const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const verify = require('../middleware/tokenverify');
const initRoutes = (app) => {
    router.post("/create", userController.createUser);
    router.get('/getAll', verify, userController.getAll);
    router.get('/getOne', verify, userController.getOneUser);
    router.put('/edit', verify, userController.updateUser);
    router.delete('/delete', verify, userController.deleteUser);
    return app.use("/", router)
}

module.exports = initRoutes;