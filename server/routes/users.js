const router = require("express").Router();
const mongoose = require("mongoose");


const User = require("../model/User.js");


const createContact = function (email, contact) {
  return Contact.create(contact).then((con) => {
    console.log(con);
    return User.findByIdAndUpdate(
      email,
      { $push: { contact: con._id } },
      { new: true, useFindAndModify: false }
    );
  });
};
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

router.post("/", async (req, res) => {
  try {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.contact = req.body.contact;
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500);
  }
});

router.put("/add-contact", async (req, res) => {
    const user = new User();
    user.email = req.body.email;
    user.contact = req.body.contact;
    user.save()
      .then((result) => {
        User.findOne({ email: user.email }, (err, user) => {
            if (user) {
                // The below two lines will add the newly saved review's 
                // ObjectID to the the User's reviews array field
                user.contact.push(contact);
                user.save();
                res.json({ message: 'Review created!' });
            }
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
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
