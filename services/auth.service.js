const db = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {

    async register(username, password, email){
        const user = await db.User.findOne({ where: { username } });

        if (user) {
            throw new Error('Username already exists');
        }
        const existingEmail = await db.User.findOne({ where: { email } });

        if (existingEmail) {

            throw new Error('Email already exists');
        }


        const hash = await bcrypt.hash(password, 10);

        return await db.User.create({
            username,
            password: hash,
            email,

        });
    },

    async login(username, password) {
        const user = await db.User.findOne({ where: { username } });

        if (!user) {
            throw new Error('User not found');
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            throw new Error('Invalid password');
        }

        return {
            id: user.id,
            username: user.username,
            role: user.role


        };
    }
}
