import dotenv from 'dotenv'
import connectDB from './db/index.js'
dotenv.config({ path: './env'})




connectDB();








// 1st method
/*
import express from "express"
const app = express();
(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        application.on("error", (error) => {
            console.log("ERROR: ", error);
        })
        // app.listen(`app is listening on port ${process.env.PORT}`);
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT} `);
        })
    } catch (error) {
        console.error("ERROR: ", error);
    }
})
*/