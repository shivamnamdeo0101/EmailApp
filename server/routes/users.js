const router = require("express").Router();
const mongoose = require("mongoose");


const User = require("../model/User.js");



router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500);
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    res.send(user);
  } catch (error) {
    res.status(500);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact;
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500);
  }
});


router.get("/view-contact/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email});

    if (!user) {
      res.send({ status: false, data: "User not found" });
    } else {
      res.send({ status: true, data: user });
    }
  } catch (error) {
    res.status(500);
  }
});

router.post("/add-contact/:id", async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id});

    req.body.contact.map((val)=>{
      user.contact.push(val)
    })

    user.save()

    if (!user) {
      res.send({ status: false, data: "User not found" });
    } else {
      res.send({ status: true, data: user });
    }
  } catch (error) {
    res.status(500);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email ,password: req.body.password});

    if (!user) {
      res.send({ status: false, data: "User not found" });
    } else {
      res.send({ status: true, data: user });
    }
  } catch (error) {
    res.status(500);
  }
});
module.exports = router;
