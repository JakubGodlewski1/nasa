//imports
import {parse} from "csv-parse"
import fs from 'fs'
const __dirname = import.meta.dirname
import path from "path"

const planets = []

const getAllPlanets = () => {
    return planets;
}

const filterHabitablePlanets =  () => new Promise((resolve, reject)=>{
    function isHabitablePlanet(planet) {
        return planet['koi_disposition'] === 'CONFIRMED'
            && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
            && planet['koi_prad'] < 1.6;
    }

    fs.createReadStream(path.join(__dirname, "..", "..", "data", "kepler_data.csv"))
        .pipe(parse({
            comment: '#',
            columns: true,
        }))
        .on('data', (data) => {
            if (isHabitablePlanet(data)) {
                planets.push(data);
            }
        })
        .on('error', (err) => {
            reject("reject")
        })
        .on('end', () => {
            resolve("resolve")
            console.log(`${planets.length} habitable planets found!`);
        });
})



export {getAllPlanets, filterHabitablePlanets}
