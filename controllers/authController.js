const User = require('../models/user');
const jwt = require('jwt-simple');
const secret = 'your_jwt_secret_key'; // Store this in an environment variable

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const payload = { user_id: user._id, role: user.role };
        const token = jwt.encode(payload, secret);

        res.status(200).json({ token });
    } catch (err) {
        res.status(400).json({ message: 'Login error', error: err });
    }
};
