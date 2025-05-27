const jwt = require("jsonwebtoken");

const generateToken = (user) => {
    return jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_KEY, // your secret key
        { expiresIn: '1h' }
    );
};

module.exports.generateToken = generateToken;
