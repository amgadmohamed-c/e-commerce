const authservice = require("../services/auth.service") ;



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
}
