const uuid = require("uuid")
const path = require("path")
const {Product, ProductInfo} = require("../models/models")
const ApiError = require("../error/ApiError")

class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, productTypeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, "..", "static", fileName))

            //create product-info
            if (info) {
                info = JSON.parse(info)
                info.forEach((index) => {
                    ProductInfo.create({
                        title: index.title,
                        description: index.description,
                        productId: index.id,
                    })
                })
            }

            const product = await Product.create({name, price, brandId, productTypeId, img: fileName})
            return res.json(product)
        } catch (err) {
            next(ApiError.badRequest(err.message))
        }

    }

    async getAll(req, res) {
        let {brandId, productTypeId, limit, page} = req.query
        page = page || 1
        limit = limit || 8
        let offset = page * limit - limit

        let products
        if (!brandId && !productTypeId) {
            products = await Product.findAndCountAll({limit, offset})
        }
        if (brandId && !productTypeId) {
            products = await Product.findAndCountAll({where: {brandId, limit, offset}})
        }
        if (!brandId && productTypeId) {
            products = await Product.findAndCountAll({where: {productTypeId, limit, offset}})
        }
        if (brandId && productTypeId) {
            products = await Product.findAndCountAll({where: {brandId, productTypeId, limit, offset}})
        }
        return res.json(products)
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: "info"}]
            }
        )
        return res.json(product)
    }

    async put(req, res) {

    }

    async delete(req, res) {

    }


}

module.exports = new ProductController()