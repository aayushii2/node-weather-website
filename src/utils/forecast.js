const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=102975a7e3020a1151a8646213d55c4c&query='+latitude+','+longitude+'&units=f'
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        }
        else if(body.error)
        {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, body.current.weather_descriptions[0]
                +'. It is currently '
                +body.current.temperature
                +' degress out. It feels like '
                +body.current.feelslike
                +' degrees out. The humidity is '
                +body.current.humidity + '%.'
                )
        }
        
    })
}

module.exports = forecast