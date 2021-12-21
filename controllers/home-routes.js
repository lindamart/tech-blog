const router = require("express").Router();

router.get("/signup", (req, res)=>{
    if(req.session.loggedIn){
        res.redirect("/")
        return
    }
    res.render("signup")
})

router.get("/login", (req, res) => {
    res.render('login')
});

module.exports = router;
