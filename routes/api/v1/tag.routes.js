const express = require("express");
const routes = express.Router();

//controllers
const tagControllers = require("../../../controllers/api/v1/tag.controllers");

//methods
routes.route("/")
    .get(tagControllers.getAllTags)
    .post(tagControllers.addTag)

routes.route("/:title").get(tagControllers.getTagByTitle);



module.exports = routes;