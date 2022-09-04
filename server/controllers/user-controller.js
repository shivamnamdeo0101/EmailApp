const mongoose = require("mongoose");
const Contact = mongoose.model("Contact");

const createContact = function (email, contacts) {
  return Contact.create(contacts).then((con) => {

    return User.findByIdAndUpdate(
      email,
      { $push: { contact: docContact._id } },
      { new: true, useFindAndModify: false }
    );
  });
};

module.exports = createContact;
