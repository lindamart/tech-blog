const router = require("express").Router();
const withAuth = require("../utils/auth")

router.get("/", withAuth, async (req, res)=>{
    try{
        res.render("layouts/dashboard")

    } catch (err){
        res.redirect("login")
    }

})

module.exports = router;