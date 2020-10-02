const express = require("express");
const DevController = require("../controllers/DevController");

const routes = express.Router();

const devController = new DevController();

routes.get("/", devController.index);
routes.get("/:id", devController.show);
routes.post("/", devController.store);
routes.put("/:id", devController.update);

module.exports = routes;
