import {getAllLaunches} from "../../models/launches.model.js";

export const httpGetAllLaunches = (req, res) => {
    const launches = getAllLaunches()
    return res.send(launches)
}


export const httpPostLaunch = (req, res) => {
    const launch = req.body
    const launches = postLaunch(launch)
   if (!launches.error){
      return res.status(201).json(launches.data)
   }else{
      return res.status(500).json(launches.error)
   }
}
