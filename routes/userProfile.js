const express = require("express")
const {authMiddleware} = require("../middlewares/userAuth")
const profileRouter = express.Router()
const {search ,getUsers, getSingleUser, editUser, deleteUser} = require("../controllers/userProfile")

profileRouter.post("/search/:query", authMiddleware, search);
profileRouter.get("/getAllUsers", getUsers)
profileRouter.get("/getSingleUser/:userId",authMiddleware, getSingleUser)
profileRouter.patch("/editUserProfile/:id", authMiddleware, editUser)
profileRouter.delete("/delete/:id", deleteUser)

module.exports = {profileRouter}