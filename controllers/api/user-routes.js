const router = require("express").Router();
const { User } = require("../../models/User");

router.post("/", (req, res)=>{
console.log("USER INFO FROM FRONTEND", req.body)
// save user into db and save req.session so it knows when youre logged in **reference student mini project user routes!!
// get dashboard (logged in homepage) to render
})





module.exports = router;
