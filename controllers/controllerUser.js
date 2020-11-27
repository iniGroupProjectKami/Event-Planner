const { User } = require("../models/index");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../helpers/generateAndVerifyToken");
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class ControllerUser {
  static userRegister(req, res, next) {
    let objUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    User.create(objUser)
      .then((data) => {
        res.status(201).json({ name: data.name, email: data.email });
      })
      .catch((err) => {
        next(err)
      });
  }

  static userLogin(req, res, next) {
    const payload = {
      email: req.body.email || "",
      password: req.body.password || ""
    }
    User.findOne({
      where: {
        email: payload.email
      },
    })
      .then((user) => {
        if (!user) {
          // res.status(401).json({ message: "Invalid Email/Password" });
          throw {
            status: 400,
            message: "Invalid email/password"
          }
        } else {
          let passwordInDataBase = user.password;
          if (bcrypt.compareSync(payload.password, passwordInDataBase)) {
            const access_token = generateToken({
              name: user.name,
              id: user.id,
              email: user.email,
            });
            res.status(200).json({ access_token, name:user.name, email:user.email });
          } else {
            // res.status(401).json({ message: "Invalid email/password" });
            throw {
              status: 400,
              message: "Invalid email/password"
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
        next(err)
      });
  }
  
  static async logInByGoogle(req, res, next) {
    try {
        const ticket = await client.verifyIdToken({
            idToken: req.body.google_token,
            audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });

        const payload = ticket.getPayload()
        console.log(payload);
        const userlogin = await User.findOne({
            where: {
                email: payload.email
            }
        })
        console.log(payload);
        if (userlogin) {
            const access_token = generateToken({
              id:userlogin.id, 
              email:userlogin.email, 
              name:userlogin.name
            })
            res.status(200).json({access_token})
        } else {
            const createuser = await User.create({
                name: payload.name,
                email: payload.email,
                password: process.env.GOOGLE_PASSWORD
            })
            const access_token = generateToken({id:createuser.id, email:createuser.email})
            res.status(200).json({access_token})
        }
    } catch (error) {
        next(error)
    }
  }
}

module.exports = ControllerUser;
