const express = require("express");
const { createuser, getuser, getusers, updateuser, Delateuser, signup, login, getProfile } = require("../controllers/user");
const { authenticateToken } = require("../middleware/auth");
const router=express.Router();

// Authentication routes
router.post("/signup", signup);
router.post("/login", login);

// Protected routes (require authentication)
router.get("/profile", authenticateToken, getProfile);

// User management routes
router.post("/",createuser);
router.get("/",getusers);
router.get("/:id",getuser)
//updated 
router.patch("/:id",updateuser);
router.delete("/:id",Delateuser)

module.exports=router;