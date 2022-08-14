const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:  {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
});

const Basket = sequelize.define("basket", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

});

const BasketProduct = sequelize.define("basket_product", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Product = sequelize.define("product", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:  {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
});

const ProductType = sequelize.define("product_type", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:  {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Brand = sequelize.define("brand", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:  {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Rating = sequelize.define("rating", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate:  {type: DataTypes.STRING, allowNull: false},
});

const ProductInfo = sequelize.define("product_info", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:  {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
});

const TypeBrand = sequelize.define("type_brand", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

})

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

ProductType.hasMany(Product);
Product.belongsTo(ProductType);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(ProductInfo);
ProductInfo.belongsTo(Product);

ProductType.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(ProductType, {through: TypeBrand});

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product,
    ProductType,
    Brand,
    Rating,
    ProductInfo,
    TypeBrand,
}