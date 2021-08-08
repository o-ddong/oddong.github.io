const tem= document.querySelector(".js-temp");
const pla= document.querySelector(".js-place");
const API_KEY = '64eae812933e2d173fe6a71145defd1b';
const COORDS = 'coords';

function getWeather(lat, lng){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            const temperture = json.main.temp;
            const place = json.name;
            tem.innerText = `${temperture}°`;
            pla.innerText = place;
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, latitude);
}

function handleGeoFail(positon){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askForCoords();
    }else {
        const parseCoords = JSON.parse(loadCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();