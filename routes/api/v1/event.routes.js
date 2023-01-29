const express = require("express");
const routes = express.Router();


//Controllers
const eventControllers = require("../../../controllers/api/v1/event.controllers");

//methods
routes.route("/").get(eventControllers.getAllEvents).post(eventControllers.addEvent);



module.exports = routes;