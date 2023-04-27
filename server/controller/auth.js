const bcrypt = require('bcryptjs');
const User = require('server/db/models/User')

export class authController {
    async registration(req, res) {
        try {
            const {username, email, password} = req.body;
            const candidate = await User.findOne({email})
            if (candidate) {
                return res.json({message: 'User is email', code: 1})
            }
            const hashPassword = bcrypt.hashSync(password, 10);
            const user = new User({username, email, password: hashPassword})
            await user.save();
            return res.json(true)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }
}