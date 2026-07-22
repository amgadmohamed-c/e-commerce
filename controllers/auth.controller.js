const authservice = require("../services/auth.service") ;
const utils = require('../utils/jwt');



module.exports = {
    async signUp(req,res){
        const { username, email, password } = req.body;
        if(!username.trim() || !email.includes('@') || !password.trim()) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const newuser = await authservice.createUser(username, email, password);
        res.status(201).json(newuser);
    }
    ,
    async signIn(req,res){
        const { username, password } = req.body;
        if(!username.trim() || !password.trim()) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const user = await authservice.login(username, password);
        if(!user) {
            res.status(400).json({ message: 'User not found' });
            return;
        }
        const day = 1000 * 60 * 60 * 24;
        const { accessToken, refreshToken } = utils.signToken(user);
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: day* 7
        });
        res.status(200).json({ accessToken, user});

    } ,
    async reauth(req, res) {
        try {
            const refreshToken = req.cookies.refreshToken;

            if (!refreshToken) {
                return res.status(400).json({
                    message: 'Refresh token is required'
                });
            }

            const user = utils.verifyToken(refreshToken);

            const tokens = utils.signToken(user);

            return res.status(200).json({
                ...tokens,
                user
            });
        } catch (err) {
            return res.status(401).json({
                message: 'Invalid refresh token'
            });
        }
    }
}
