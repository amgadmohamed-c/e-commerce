

module.exports = {
    async isadmin(req, res, next) {
        const user = req.user;
        if (!user) {
            res.status(401).json({ message: 'No token provided' });
            return;
        }
        if (user.role !== 'admin') {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }
        next();
    }}
