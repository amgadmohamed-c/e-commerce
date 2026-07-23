
const userService = require("../services/user.service");

module.exports = {
    async getallUsers(req, res) {
        const users = await userService.getallUsers();
        res.status(200).json(users);
    },
    async getUser(req, res) {
        const user = await userService.getUser(req.user.id);
        res.status(200).json(user);
    },
    async updateUser(req, res) {
        try {
            const { username, email } = req.body;
            const updateduser = await userService.updateUser(req.user.id, { username, email });
            res.status(200).json(updateduser);
        }catch(err){
            res.status(404).json({ message: 'User not found' });
            return;
        } },
    async deleteUser(req, res) {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const user = await userService.deleteUser(id);
        res.status(200).json(user);
    }
};
