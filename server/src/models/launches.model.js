const launches = new Map()

const exampleLaunch = {
    flightNumber: 100,
    mission: "Kelper Exploration X",
    rocket:"Explorer IS1",
    launchDate: new Date("December 27, 2030"),
    destination: "Kepler-442 b",
    "customers":["ZTM", "NASA"],
    upcoming: true,
    success: true
}

launches.set(exampleLaunch.flightNumber, exampleLaunch)


const postLaunch = (launch) => {
    launches.set(Array.from(launches.values()).length+100, launch)
}

const getAllLaunches = () => Array.from(launches.values())


export {getAllLaunches, postLaunch}


