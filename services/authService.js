// services/authService.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
    // Register a new user
    async register(name, email, password, phone, role) {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) throw new Error('User already exists');

        const hashedPassword = bcrypt.hashSync(password, 8);
        return await User.create({ name, email, password: hashedPassword, phone, role });
    }

    // Login and return JWT token
    async login(email, password) {
        const user = await User.findOne({ where: { email } });
        if (!user || !bcrypt.compareSync(password, user.password)) {
            throw new Error('Invalid credentials');
        }

        return jwt.sign({ id: user.id, email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
}

module.exports = new AuthService();
