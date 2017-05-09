

export default class DataScrubbers {

  scrubQuotes(data) {
    let quotes = data.results.reduce((acc, val) => {
      acc.push(val.opening_crawl)
      return acc
    }, [])
    return quotes
  }

  scrubPeople(data) {

    let personalInfo = data.results.reduce((acc, val) => {
      if(!acc[val.name]) {

        acc[val.name] = {}
        acc[val.name].name = val.name

        fetch(val.homeworld)
        .then((resp) => resp.json())
        .then((data) => {
          acc[val.name].homeworld=data.name
          acc[val.name].population=data.population
          return
        })

        fetch(val.species[0])
        .then((resp) => resp.json())
        .then((data) => {

          acc[val.name].species=data.name
          acc[val.name].language=data.language
          return
        })
      }
        console.log(acc);
      return acc
    }, {})
  }

    scrubPlanets(data) {
      let planetInfo = data.results.reduce((acc, val) => {
          if(!acc[val.name]) {
            acc[val.name] = {}
            acc[val.name].name = val.name
            acc[val.name].terrain = val.terrain
            acc[val.name].population = val.population
            acc[val.name].climate = val.climate
            acc[val.name].residents = []
            // NOTE:acc[val.name].residents = {}

            val.residents.forEach((resident, i) => {
              fetch(resident)
              .then((resp) => resp.json())
              .then((data) => {
                  acc[val.name].residents.push(data.name)
                // acc[val.name].residents[i]=data.name
                //NOTE:FOR RESIDENT BEING AN OBJECT
                return
              })
            })
          }
          console.log(acc);
        return acc
      }, {})
    }

    scrubVehicles(data) {
      let vehicleInfo = data.results.reduce((acc, val) => {
        if(!acc[val.name]) {
          acc[val.name] = {}
          acc[val.name].name = val.name
          acc[val.name].model = val.model
          acc[val.name].class = val.vehicle_class
          acc[val.name].numberOfPassengers = val.passengers
        }
        console.log(acc);
        return acc
      }, {})
    }
}
