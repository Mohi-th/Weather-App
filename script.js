const btn = document.querySelector('.search_btn')

btn.addEventListener('click', async () => {
    var place = document.querySelector('.search_input').value
    console.log(place)
    console.log('place name : ' + place)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${place}&appid=7455ac2650d716f7a187fc67dc0b46ae`)
    let data = await response.json()
    console.log(data)
    display(data)
})

function display(data) {
    const weather_section=document.querySelector('.weather')
    weather_section.style.display='flex'
    const place_name = document.querySelector('.place_name')
    const temperature = document.querySelector('.temperature')
    const humidity_percentage = document.querySelector('.humidity_percent')
    const wind_speed = document.querySelector('.wind')
    const weather_icon = document.querySelector('.weather_icon')
    const weather = data.weather[0].main
    if (weather == 'Clear') {
        weather_icon.setAttribute('src', 'images/clear.png')
    } else if (weather == 'Clouds') {
        weather_icon.setAttribute('src', 'images/clouds.png')
    } else if (weather == 'Drizzle') {
        weather_icon.setAttribute('src', 'images/drizzle.png')
    } else if (weather == 'Mist') {
        weather_icon.setAttribute('src', 'images/mist.png')
    } else if (weather == 'Rain') {
        weather_icon.setAttribute('src', 'images/rain.png')
    } else if (weather == 'Snow') {
        weather_icon.setAttribute('src', 'images/snow.png')
    }
    temperature.innerText = Math.floor(data.main.temp) + "°c"
    place_name.innerText = data.name
    humidity_percentage.innerText = data.main.humidity + '%'
    wind_speed.innerText = data.wind.speed + ' km/h'
}