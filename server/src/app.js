//imports
import express from "express";
import cors from "cors"
import path from "path";
const __dirname = import.meta.dirname
import morgan from "morgan"

//custom imports
import {planetsRouter} from "./routers/planets/planets.router.js";
import {corsOptions} from "./config/corsOptions.js";
import {filterHabitablePlanets} from "./models/planets.model.js";
import {launchesRouter} from "./routers/launches/launches.router.js";


//app init
export const app = express()


//middleware [security]
app.use(cors(corsOptions))

//middleware
app.use(morgan("combined"))
app.use(express.json())
app.use(express.static(path.join(__dirname, "..","public")))

//routers and route handlers
app.use("/planets",planetsRouter)
app.use("/launches",launchesRouter)


//serve all pages from react
app.get("/*", (req, res)=>{
    res.sendFile(path.join(__dirname, "..", "public", "index.html"))
})


//THINGS TO DO BEFORE SERVER STARTS:
//filter planets
await filterHabitablePlanets()

