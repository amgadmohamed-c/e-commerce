const utils = require('../utils/jwt');

module.exports = {
    async verifyToken(req, res, next) {
        const token = req.headers.authorization;
        if (!token) {
            res.status(401).json({ message: 'No token provided' });
            return;
        }
        try {
            const accessToken = token.split(' ')[1];
            if (!accessToken) {
                res.status(401).json({ message: 'No token provided' });
                return;
            }

            const decoded = utils.verifyToken(accessToken);
            req.user = decoded;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid token' });
        }
    }
};
