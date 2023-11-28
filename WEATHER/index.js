var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('c#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
 apik ='51e8b62b711af71702d32408c4df0c15'
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid',$,{apik})
    .then(res => res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var windspeed = data['wind']['speed']


            city.innerHTML='Weather of <span>${nameval}<span>'
            temp.innerHTML ='Temperature:<span>${ convertion(temperature)} c<span>'
            description.innerHTML = 'Sky conditions: <span>${descrip}<span>'
            wind.innerHTML = 'wind speed: <span>${windspeed} km/h<span>'
       
        })
        
      .catch(err => alert('you entered wrong city name'))
})