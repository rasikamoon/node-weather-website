const request = require('postman-request')
const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=56c60ecec35ac8fe08b6b010fbf70765&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather services!', undefined)

        } else if (body.error) {
            callback('Unable to find location, try another search!', undefined)

        } else {
            callback(undefined, body.current.weather_descriptions + ". It is currently " + body.current.temperature + " degrees out. It feels like "
            + body.current.feelslike + " degrees and the humidity is " + body.current.humidity + "% ." )

        }
    })
}

module.exports = forecast

//            callback(undefined, body.location.lat + body.location.lon)
