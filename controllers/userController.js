const bcrypt = require("bcryptjs");
const db = require("../models");
const validateRegisterInput = require("../validation/register");

module.exports = {
  createUser: function (req, res) {
    console.log(req.body);
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    db.User.findOne({ username: req.body.username }).then(user => {
      if (user) {
        return res.status(400).json({ username: "Username is already in use - please choose another" });
      } else {
        const newUser = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        }
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            db.User.create(newUser).then(user => {
              //   console.log(user);
              res.json(user);
            }).catch(err => {
              console.log(err);
            });
          });
        });
      }
    });
  }
}