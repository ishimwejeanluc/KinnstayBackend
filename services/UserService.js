const User = require('../models/User');
const bcrypt = require('bcryptjs');

class UserService {
    // Retrieve all users
    async getAllUsers() {
        return await User.findAll();
    }

    // Retrieve a user by ID
    async getUserById(id) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        return user;
    }

    // Create a new user
    async createUser(data) {
        if (data.password) {
            data.password = bcrypt.hashSync(data.password, 8);
        }
        return await User.create(data);
    }

    // Update an existing user
    async updateUser(id, updates) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');

        if (updates.password) {
            updates.password = bcrypt.hashSync(updates.password, 8);
        }

        Object.assign(user, updates);
        await user.save();
        return user;
    }

    // Delete a user
    async deleteUser(id) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');

        await user.destroy();
        return { message: 'User deleted successfully' };
    }
}

module.exports = new UserService(); 