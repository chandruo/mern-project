const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All mandatory fields required" });
    }
    const existingUser = await User.findOne({ email });
    console.log("existingUser", existingUser);
    if (existingUser) {
      return res.status(409).json({ message: "user already exists" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedpassword,
    });

    res.status(201).json({
      message: "User created successfully",
      userID: user._id,
    });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "no user found" });
    }

    const ismatch = await bcrypt.compare(password, user.password);
    console.log("ismatch", ismatch);
    if (!ismatch) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "200s",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 100 * 1000, 
    });
    res.status(200).json({
      message: "Login Successful",
      token,
      userDetails: {
        id: user._id,
        name: user.username,
        role: user.role,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { signup, login };
