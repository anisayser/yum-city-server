const express = require("express");
const routes = express.Router();


//Controllers
const commentControllers = require("../../../controllers/api/v1/comment.controllers");

routes.route("/").get(commentControllers.getAllComments).post(commentControllers.addComment);

routes.route("/:id").get(commentControllers.getCommentsByBlogId);


module.exports = routes;