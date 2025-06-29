const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        status: "failed",
        message: "Access token required"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({
        status: "failed",
        message: "Invalid token"
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({
      status: "failed",
      message: "Invalid token"
    });
  }
};

module.exports = { authenticateToken }; 