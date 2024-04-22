import dotenv from 'dotenv'
import connectDB from './db/index.js'
import app from './app.js'
dotenv.config({ path: './env'})




connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERROR: ", error);
    }) 
    app.listen(process.env.PORT || 8000, () => {
        console.log(`app is listning on the ${process.env.PORT}`)
    } );
})
.catch(() => {
    console.error("MONGOO connection error", error);
})








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