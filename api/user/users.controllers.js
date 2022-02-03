const User = require("../../models/user");
const bcrybt = require("bcrypt");
const { JWT_SECRET, JWT_EXP } = require("../../config/keys");
const jwt = require("ksonwebtoken");

exports.signUp = async (req, res, next) => {
  try {
    // 1encrypt password
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;
    // step two Save the user in DB
    const user = await User.create(req.body);
    // Create a token
    const payload = {
      username: user.username,
      id: user.id,
      exp: Date.now() + JWT_EXP,
    };
    const token = jwt.sign(payload, JWT_SECRET);

    // / Final step

    res.status(201).json({ token: token });
  } catch (error) {
    next(error);
  }
};
