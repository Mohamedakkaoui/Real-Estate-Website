const UserSchema = require('../models/schemas/user.Model.js');
const {hashPassword } = require('../helpers/hashing');
const {generateToken} = require('../helpers/jwt');
// const { comparePassword } = require("./hashing.js");
const {checkExitingMail} = require('../models/methods/user.Methods.js')


exports.getRegister = async(req,res) => {
    try{
        
        const {username, email, password} = req.body;
        console.log('entered')
        const hashedPassword = await hashPassword(password);
        const verifyEmail =  await checkExitingMail(email)
        if(verifyEmail){
            return res.status(400).json({message:"email already used"})
        }
        const newUser = new UserSchema({username,email,password:hashedPassword})
        const result = await newUser.save()
        return res.status(200).json({message:'signing up successfully'},result)
    }catch(err){
        return res.status(404).send(err)
    }
}




// exports.getLogin= async(req, res) => {
//     try{
//         const {email, password} = req.body;
//         const user =await UsersSchema.findOne({email});
//         if(!user){
//             return res.status(400).json({message :"User not founds"})
//         }
//         const checked =await comparePassword(password,user.password)
//         if(!checked) return res.status(400).json({message:"Incorrect Password"})
//         const userObject = user.toObject();
//         const token = await generateToken(userObject);
//         res.cookie('tokenUser',token).json({ message: "Login successful", token });

//     }catch(err){
//         console.error(err);
//         return res.status(501).send('server error')
//     }   
// }