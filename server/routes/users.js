const router = require("express").Router();
const mongoose = require("mongoose");

const User = mongoose.model("User")

router.get("/", async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(500)
    }
});

router.get("/:userId", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId })
        res.send(user)
    } catch (error) {
        res.status(500);
    }
});

router.post("/", async (req, res) => {    
    try {
        const user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        await user.save();
        res.send(user)
    } catch (error) {
        res.status(500)
    }
})
module.exports = router;