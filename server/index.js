require("dotenv").config()
const express = require("express")
const sequelize = require("./db")
const models = require("./models/models")
const cors = require("cors")
const router = require("./routes/index")
const fileUpload = require("express-fileupload")
const path = require("path")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")


const PORT = process.env.PORT || 3004
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use("/api", router)


//Обработка ошибок, должна быть последней
app.use(errorHandler)

const startApp = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ()=> console.log(`Server started on ${PORT} port`));
    } catch (error) {
        console.log(error);
    }
}
startApp()