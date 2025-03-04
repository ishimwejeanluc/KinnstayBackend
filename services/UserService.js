const User = require('../models/User');

class UserService {
    async getAllUsers() {
        return await User.findAll();
    }

    async getUserById(id) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        return user;
    }

    async createUser(data) {
        return await User.create(data);
    }

    async updateUser(id, updates) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');

        Object.assign(user, updates);
        await user.save();
        return user;
    }

    async deleteUser(id) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');

        await user.destroy();
        return { message: 'User deleted successfully' };
    }
}

module.exports = UserService; 