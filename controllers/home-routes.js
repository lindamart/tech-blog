const router = require("express").Router();

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

// do i put this into above code?
res.render('homepage', {
//    what do i pass here? logged in status? logged_in: req.session.logged_in 
});
catch (err) {
    res.status(500).json(err);
}

module.exports = router;
