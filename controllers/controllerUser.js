const { User } = require("../models/index")
const bcrypt = require('bcryptjs');
const { generateToken } = require("../helpers/generateAndVerifyToken")

class ControllerUser {
    static userRegister(req, res) {
        let objUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        User.create(objUser)
            .then(data => {
                res.status(201).json({ name: data.name, email: data.email })
            })
            .catch(err => {
                res.status(500).json({err: err})
            })
    }

    static userLogin(req, res) {
        let email = req.body.email
        let password = req.body.password
        User.findOne({
            where: {
                email
            }
        })
            .then(user => {
                if(!user) {
                    res.status(401).json({ message: "Invalid Email/Password" })
                }else {
                    let passwordInDataBase = user.password
                    if(bcrypt.compareSync(password, passwordInDataBase)) {
                        const acces_token = generateToken({ name: user.name, id: user.id, email: user.email })
                        res.status(200).json(acces_token)
                    }else {
                        res.status(401).json({ message: "Invalid email/password" })
                    }
                }
            })
            .catch(err => {
                res.status(500).json({ message : "Internal Server Error"})
            })
    }

    static logInByGoogle(req, res) {

    }
}

module.exports = ControllerUser