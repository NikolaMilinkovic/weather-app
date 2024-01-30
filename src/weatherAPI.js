import './style.css';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

// Cache each element on the page
let city = document.getElementById('city');
let country = document.getElementById('country');
let weekday = document.getElementById('weekday');
let temperature = document.getElementById('temperature');
let feelsLike = document.getElementById('feels-like');
let weatherImg = document.getElementById('weather-img');
let weatherText = document.getElementById('weather-text');
const getElements = () => {
    city = document.getElementById('city');
    country = document.getElementById('country');
    weekday = document.getElementById('weekday');
    temperature = document.getElementById('temperature');
    feelsLike = document.getElementById('feels-like');
    weatherImg = document.getElementById('weather-img');
    weatherText = document.getElementById('weather-text');
};

let inputField = document.getElementById('input-city');
// Innitialize required values
let inputData = '';
let latitude = '';
let longitude = '';
let response = '';
let responseData = '';

// Method for taking user input
const getCity = () => {
    inputField = document.getElementById('input-city');
    inputData = inputField.value;
};
const clearField = () => {
    inputField.value = '';
};

// Method for retrieving the API JSON data
const fetchWeatherData = async () => {
    try {
        if (inputData === '' && latitude !== '' && longitude !== '') {
            console.log('Running coords');
            response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5335746e216d497981b153233242601&q=' + `${latitude}` + ',' + `${longitude}` + '&days=8&aqi=no&alerts=no', { mode: 'cors' });
        } else if (inputData !== '') {
            console.log('Running inputData !== empty');
            response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5335746e216d497981b153233242601&q=' + `${inputData}` + '&days=8&aqi=no&alerts=no', { mode: 'cors' });
        } else {
            console.log('Running else statement');
            response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5335746e216d497981b153233242601&q=Zemun&days=8&aqi=no&alerts=no', { mode: 'cors' });
        }

        const awaitJSON = await response.json();
        console.log(awaitJSON);
        return awaitJSON;
    } catch (error) {
        console.error(`Oops! Something went wrong.. ${error}`);
    }
};

// Method for processing JSON data, returns an object with needed information
const processJSON = (JSON) => {
    const fetchedData = JSON;
    return {
        country: fetchedData.location.country,
        city: fetchedData.location.name,
        localTime: fetchedData.location.localtime,
        feelsLikeC: fetchedData.current.feelslike_c,
        feelsLikeF: fetchedData.current.feelslike_f,
        temperatureC: fetchedData.current.temp_c,
        temperatureF: fetchedData.current.temp_f,
        text: fetchedData.current.condition.text,
        img: fetchedData.current.condition.icon,
        forecast: fetchedData.forecast.forecastday
            .map((day) => ({
                date: day.date,
                avgTempC: day.day.avgtemp_c,
                avgTempF: day.day.avgtemp_f,
                text: day.day.condition.text,
                icon: day.day.condition.icon,
            })),
    };
};

// Method for display weekly forecast
const displayWeeklyForcast = (JSONdata) => {
    const displayData = JSONdata;

    displayData.forecast.forEach((day) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'forecast-div');

        const weekday = document.createElement('para');
        const avgTempC = document.createElement('para');
        avgTempC.setAttribute('class', 'temperature');
        const condition = document.createElement('para');
        condition.setAttribute('class', 'condition');
        const icon = document.createElement('img');

        weekday.innerHTML = `${dayjs(day.date).locale('en').format('ddd')}`;
        avgTempC.innerHTML = `${day.avgTempC}°`;
        condition.innerHTML = day.text;
        const imgPath = day.icon;
        icon.setAttribute('src', imgPath);
        icon.setAttribute('class', 'forecast-img');

        div.appendChild(weekday);
        div.appendChild(avgTempC);
        div.appendChild(condition);
        div.appendChild(icon);


        document.getElementById('forecast-section').appendChild(div);
    });
};

// Removes all forecast data
const removeForecastData = () => {
    const divElement = document.getElementById('forecast-section');
    divElement.innerHTML = '';
};

// Method for displaying the weather data
const display = (JSONdata) => {
    const displayData = JSONdata;
    removeForecastData();
    getElements();


    city.innerHTML = displayData.city;
    country.innerHTML = displayData.country;
    weekday.innerHTML = `${dayjs(displayData.localTime).locale('en').format('dddd')}`;
    temperature.innerHTML = `Temperature: ${displayData.temperatureC}°`;
    feelsLike.innerHTML = `Feels like: ${displayData.feelsLikeC}°`;
    weatherImg.src = displayData.img;
    weatherText.innerHTML = displayData.text;
    displayWeeklyForcast(displayData);
};

// Logic for getting user location
const successCallback = async (position) => {
    latitude = parseFloat(position.coords.latitude.toFixed(4));
    longitude = parseFloat(position.coords.longitude.toFixed(4));

    // Fetch and display weather data after getting the location
    const data = await fetchWeatherData();
    const processedData = processJSON(data);
    display(processedData);
};
const errorCallback = async (error) => {
    console.error(error);
    const data = await fetchWeatherData();
    const processedData = processJSON(data);
    display(processedData);
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// Main method that is run upon button click
const runCitySearch = async () => {
    getCity();
    clearField();

    // retrieves JSON data
    responseData = await fetchWeatherData();

    // Feeds object with data to display method
    // Displays the values on the screen
    display(processJSON(responseData));
};

export default runCitySearch;
