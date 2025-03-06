// controllers/authController.js
const AuthService = require('../services/authService');

class AuthController {
    async register(req, res) {
        const { name, email, password, phone, role } = req.body;
        try {
            const user = await AuthService.register(name, email, password, phone, role);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async login(req, res) {
        const { email, password } = req.body;
        try {
            const token = await AuthService.login(email, password);
            res.json({ token });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
}

module.exports = new AuthController();
