const {ProductType} = require("../models/models")
const ApiError = require("../error/ApiError")

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await ProductType.create({name})
        return res.json(type)
    }

    async get(req, res) {

    }

    async put(req, res) {

    }

    async delete(req, res) {

    }


}

module.exports = new TypeController()