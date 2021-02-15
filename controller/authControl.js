const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authControl = {
    register: async (req,res) => {
        try {
            const { fullname, username, email, password, gender } = req.body
            let newUserName = username.toLowerCase().replace(/ /g, '')

            const user_name = await Users.findOne({username: newUserName})
            if(user_name) return res.status(400).json({msg: "This user name already exists"})

            const user_email = await Users.findOne({email})
            if(user_email) return res.status(400).json({msg: "This email already exists"})

            if(password.length < 10)
            return res.status(400).json({msg: "Password must be at least 11 characters"})

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = new Users({
                fullname, username: newUserName, email, password: passwordHash, gender
            })

            console.log(newUser)

            const access_token = createAccessToken({id: newUser._id})
            const refresh_token = createRefreshToken({id: newUser._id})


            res.json({msg: "Register Success xxxx"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    login: async (req,res) => {
        try {

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async (req,res) => {
        try {
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    generateAccessToken: async (req,res) => {
        try {
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}


const createAccessToken = () => {
    
}

const createRefreshToken = () => {

}
module.exports = authControl