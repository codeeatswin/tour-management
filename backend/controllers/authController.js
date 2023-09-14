import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// user registration
export const register = async (req, res) => {
  try {
    // hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password.trim(), salt);

    const { username, email, password, photo } = req.body;
    const newUser = new User({
      username: username.trim(),
      email: email.trim(),
      password: hash,
      photo: photo.trim(),
    });
    await newUser.save();
    res.status(200).json({ success: true, message: 'Successfully created' });
  } catch (error) {
    res
      .status(500)
      .json({ success: true, message: 'Failed created. Try again' });
  }
};

// user login

export const login = async (req, res) => {
  const email = req.body.email.trim();
  try {
    const user = await User.findOne({ email });
    // if user doesn't exist
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }
    //if user is exist then check the password or compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password.trim(),
      user.password
    );
    // if password is incorrect
    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: 'incorrect email or password' });
    }
    const { password, role, ...rest } = user._doc;

    //create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '15d' }
    );

    //set token in the browser cookies and send the response to the client
    res
      .cookie('accessToken', token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        token,
        message: 'successfully login',
        data: { ...rest },
        role,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to login' });
  }
};
