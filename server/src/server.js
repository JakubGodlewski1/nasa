//imports
import http from "http"

//custom imports
import {app} from "./app.js";

//init
const server = http.createServer(app)
const PORT = process.env.PORT || 8000;


//start server
server.listen(PORT, ()=>{
    console.log("listening on port ", PORT)
})
