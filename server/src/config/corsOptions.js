const whitelist = [
    "https://www.google.com",
    "http://localhost:3000"
]

export const corsOptions = {
    origin: (origin, callback)=>{
        if (whitelist.includes(origin) || !origin){
            callback(null, true)
        }else{
            callback(new Error("Not allowed by cors"))
        }
    },
    optionsSuccessStatus: 200
}
