const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url='http://api.weatherstack.com/current?access_key=83b71e98aa92d04a4777ccefb35ced57&query='+latitude+','+longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {       //koordinatları sildiğimde aldığım hata (-75.7088, 44.1545)
            callback('Unable to find location. Try another search.', undefined)
        } else {
            temperature= body.current.temperature,
            fTemperature= body.current.feelslike,
            description= body.current.weather_descriptions[0],
            humidity = body.current.humidity,
            wind_speed = body.current.wind_speed
            callback(undefined, "The humidity is %"+ humidity +
                ".\nThe weather is "+description+".it is currently "+temperature+" degrees out.İt feels like "+fTemperature+" degrees out\n"+
                    "The wind speed is "+ wind_speed)
        }
    })
}

module.exports = forecast