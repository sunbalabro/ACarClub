const User = require('../model/user');
const bcrypt = require("bcrypt");

exports.postSignin = async (req, res) => {
    const { email, password } = req.body;
    const currentUser = await User.findOne({ email });
    if (!currentUser) {
        return res.send
    }
    bcrypt.compare(password, currentUser.password, (err, result) => {
        if (err) {
            return res.json({success: false, message: "Password Does not Matched" })
        }
        
    })
}

exports.postSignUp = async (req, res) => {
    const { fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.send("User Already Exists");
    }
    const bcryptGenSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, bcryptGenSalt)
    const newUser = await User.create({
        fullName,
        email,
        password: hashPassword,
        role: 'user'
    })
    res.redirect("/signin");
}