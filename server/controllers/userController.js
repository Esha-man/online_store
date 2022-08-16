const ApiError = require("../error/ApiError")
const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")
const {User, Basket} = require("../models/models")

const generateJwt = (id, email, role) => {
    return jsonwebtoken.sign({id, email, role},
        process.env.SECRET_JWT_KEY,
        {expiresIn: "24h"}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("Введите корректный email или пароль"))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest("Пользователь с таким email уже зарегистрирован"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const jwt = generateJwt(user.id, user.email, user.role)
        return res.json({jwt})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest("Данный пользователь не зарегистрирован."))
        }
        let comparePassword = bcrypt.compareSync(password, user.password) //Bearer + tokenBody
        if (!comparePassword) {
            return next(ApiError.badRequest("Неверный пароль."))
        }
        const jwt = generateJwt(user.id, user.email, user.role)
        return res.json({jwt})

    }

    async checkRegistration(req, res, next) {
        const jwt = generateJwt(user.id, user.email, user.role)
        return res.json({jwt})

    }
}

module.exports = new UserController()