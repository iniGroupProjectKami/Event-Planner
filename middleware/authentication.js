const { verifyToken } = require("../helpers/generateAndVerifyToken")
const { User } = require("../models/index")

function authentication(req, res, next) {
    try {
        let access_token = req.headers.access_token
        if(!access_token) {
            res.status(401).json({ error: "You must have account" })
        }else {
            const decoded = verifyToken(access_token)
            let id = decoded.id
            let email = decoded.email
            req.dataLoginUser = decoded

            User.findOne({
                where: {
                    id,
                    email
                }
            })
                .then(data => {
                    if(data) {
                        next()
                    }else {
                        res.status(401).json({ msg: "You must have account, please login first"})
                    }
                })
                .catch(err => {
                    res.status(500).json(err)
                })
        }
    }
    catch(err) {
        res.status(500).json(err)
    }
}

module.exports = authentication