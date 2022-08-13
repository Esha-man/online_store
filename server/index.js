require("dotenv").config();
const express = require("express");
const sequelize = require("./db")
const models = require("./models/models")
const cors = require("cors")
const router = require("./routes/index")


const PORT = process.env.PORT || 3004;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

// app.get("/", (request, response)=>{
//     response.status(200).json({message: "Hello!"})
// } )

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