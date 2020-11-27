const express = require("express");
const route = express.Router();
const authentication = require("../middleware/authentication");
const ControllerApp = require("../controllers/controllerApps");
const ControllerUser = require("../controllers/controllerUser");

route.post("/register", ControllerUser.userRegister);
route.post("/login", ControllerUser.userLogin);
route.post("/google-login", ControllerUser.logInByGoogle);

route.use(authentication);
route.get("/museums", ControllerApp.showMuseumJakarta);
route.get("/holidays", ControllerApp.showHolidays);
route.get("/weathers", ControllerApp.showWeather);

module.exports = route;
