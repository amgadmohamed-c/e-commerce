const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = {
    signToken(user) {
       const accessToken = jwt.sign({
            id: user.id,
            username: user.username,
            role: user.role
        }, process.env.JWT_SECRET, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        });
        const refreshToken = jwt.sign({
            id: user.id,
            username: user.username,
            role: user.role
        }, process.env.JWT_SECRET, {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        });
        return {
            accessToken,
            refreshToken
        };
    },
    verifyToken(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    } ,

};
