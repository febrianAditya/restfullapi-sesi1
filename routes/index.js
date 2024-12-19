const express = require("express")
const route = express.Router()
const UserControllers = require("../controllers/userControllers")
const VehicleControllers = require("../controllers/vehicleControllers")
const authenticateUser = require("../middlewares/authentication")
const authorizationUser = require("../middlewares/authorization")

route.post("/register", UserControllers.registerUser)

route.post("/login", UserControllers.loginUser)

route.get("/allvehicle", VehicleControllers.getAllVehicle)

route.get("/coba", UserControllers.coba)

route.use(authenticateUser)
route.get("/user", UserControllers.getAllData)


route.put("/user/:id", authorizationUser, UserControllers.editUser)

module.exports = route