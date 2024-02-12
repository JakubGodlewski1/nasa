import {getAllPlanets} from "../../models/planets.model.js";
const httpGetAllPlanets = (req, res)=> {
  const planets = getAllPlanets()
    if (planets){
        return res.json(planets)
    }else{
        return res.json("Could not connect to the database")
    }
}


export {httpGetAllPlanets}
