const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res)=>{
    try{
        await res.render("main")
    } catch (err){
        res.status(500).json(err)
    }
    
})

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/")
        return
    }
    res.render("signup")

})

router.get("/login", (req, res) => {
    res.render('login')
});


module.exports = router;
