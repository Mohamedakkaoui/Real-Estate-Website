const UsersSchema = require('../models/user.Model');
const {hashPassword } = require('../helpers/hashing');
const {generateToken} = require('../helpers/jwt');
const { comparePassword } = require("./hashing.js");

exports.getLogin= async(req, res) => {
    try{
        const {email, password} = req.body;
        const user =await UsersSchema.findOne({email});
        if(!user){
            return res.status(400).json({message :"User not founds"})
        }
        const checked =await comparePassword(password,user.password)
        if(!checked) return res.status(400).json({message:"Incorrect Password"})
        const userObject = user.toObject();
        const token = await generateToken(userObject);
        res.cookie('tokenUser',token).json({ message: "Login successful", token });

    }catch(err){
        console.error(err);
        return res.status(501).send('server error')
    }   
}