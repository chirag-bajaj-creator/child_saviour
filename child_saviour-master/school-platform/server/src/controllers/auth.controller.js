const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const generateToken = require('../utils/generateToken');

// Register new user
const register = async (req, res) => {
  try {
    const { name, email, mobile, password, role, school_id } = req.body;

    // Validate input
    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      name,
      email,
      mobile,
      password_hash: hashedPassword,
      role,
      school: school_id,
    });

    await newUser.save();

    // Create student or teacher profile based on role
    if (role === 'student' && school_id) {
      const newStudent = new Student({
        user: newUser._id,
        school: school_id,
      });
      await newStudent.save();
    } else if (role === 'teacher' && school_id) {
      const newTeacher = new Teacher({
        user: newUser._id,
        school: school_id,
      });
      await newTeacher.save();
    }

    // Generate token
    const token = generateToken(newUser._id, role, school_id);

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password, school_id } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // For non-admin users, school_id is required
    if (user.role !== 'admin' && !school_id) {
      return res.status(400).json({ error: 'School ID required for this user' });
    }

    // Check if non-admin user belongs to selected school
    if (user.role !== 'admin' && user.school && user.school.toString() !== school_id) {
      return res.status(401).json({ error: 'User does not belong to this school' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate token
    const token = generateToken(user._id, user.role, school_id);

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        school_id: user.school?._id || null,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Refresh token
const refreshToken = async (req, res) => {
  try {
    const { user_id, role, school_id } = req.user;

    const newToken = generateToken(user_id, role, school_id);

    res.json({
      message: 'Token refreshed',
      token: newToken,
    });
  } catch (error) {
    console.error('Token refresh error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
  refreshToken,
};
