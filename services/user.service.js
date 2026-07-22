const db = require('../models');




module.exports = {

    async getUser(id) {
        const user = await db.User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }

        return {
            id: user.id,
            username: user.username,
            role: user.role
        }
    },
    async updateUser(id, data) {
        const user = await db.User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
       const existingEmail = await db.User.findOne({ where: { email: data.email } });

       if (existingEmail && existingEmail.id !== id) {

           throw new Error('Email already exists');
       }
       const existingUsername = await db.User.findOne({ where: { username: data.username } });

       if (existingUsername && existingUsername.id !== id) {

           throw new Error('Username already exists');
       }

        return await user.update(data, {
            fields: ['username', 'email'],
        });
    },
    async deleteUser(id) {
        const user = await db.User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }

        return await db.User.destroy({
            where: {
                id
            }
        });
    }
}
