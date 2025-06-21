const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware')
const autherizedRole = require('../middleware/roleMiddleware')

// Only admin can access this routes
router.get("/admin", verifyToken,autherizedRole("admin"), (req,res)=>{
    res.json({message: "welcome admin"})
})


// Only admin and manager can access this routes
router.get("/manager",verifyToken,autherizedRole("admin","manager"), (req,res)=>{
    res.json({message: "welcome manager"})
})


// Anyone can access this routes
router.get("/user",verifyToken,autherizedRole("admin","manager","user"), (req,res)=>{
    res.json({message: "welcome user"})
})

module.exports = router;

