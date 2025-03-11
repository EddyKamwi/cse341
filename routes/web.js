const routes = require("express").Router();
const HomeController = require("../controllers/HomeController");

routes.get("/", HomeController.index);
routes.get("/about", HomeController.about);
routes.get("/contact", HomeController.contact);

module.exports = routes;
