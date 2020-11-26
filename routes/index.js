const express = require("express")
const route = express.Router()
const authentication = require("../middleware/authentication")
const ControllerApp = require("../controllers/controllerApps")
const ControllerUser = require("../controllers/controllerUser")

route.post("/register", ControllerUser.userRegister)
route.post("/login", ControllerUser.userLogin)
route.post("/google-login", ControllerUser.logInByGoogle)

route.use(authentication)
route.get("/showTicket", ControllerApp.showAllDataTickets)

module.exports = route