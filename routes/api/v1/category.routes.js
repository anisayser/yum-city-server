const express = require("express");
const routes = express.Router();

//controllers
// const categoryControllers = require("../../../controllers/api/v1/category.controllers");
const categoryControllers = require("../../../controllers/api/v1/category.controllers");

//methods
routes.route("/")
    .get(categoryControllers.getAllCategories)
    .post(categoryControllers.addCategory)

routes.route("/:title").get(categoryControllers.getCategoryByTitle);



module.exports = routes;