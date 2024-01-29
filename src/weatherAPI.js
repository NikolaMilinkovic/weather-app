import './style.css';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

// Cache each element on the page
const city = document.getElementById('city');
const country = document.getElementById('country');
const localTime = document.getElementById('local-time');
const temperature = document.getElementById('temperature');
const feelsLike = document.getElementById('feels-like');
const inputField = document.getElementById('input-city');
// Innitialize required values
let inputData = '';
let latitude = '';
let longitude = '';
let response = '';
let responseData = '';

// Method for taking user input
const getCity = () => {
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
            response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5335746e216d497981b153233242601&q=' + `${latitude}` + ',' + `${longitude}` + '&days=14&aqi=no&alerts=no', { mode: 'cors' });
        } else if (inputData !== '') {
            console.log('Running inputData !== empty');
            response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5335746e216d497981b153233242601&q=' + `${inputData}` + '&days=14&aqi=no&alerts=no', { mode: 'cors' });
        } else {
            console.log('Running else statement');
            response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5335746e216d497981b153233242601&q=Zemun&days=14&aqi=no&alerts=no', { mode: 'cors' });
        }

        const awaitJSON = await response.json();
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
        const date = document.createElement('para');
        const avgTempC = document.createElement('para');
        const condition = document.createElement('para');
        const icon = document.createElement('img');

        weekday.innerHTML = `${dayjs(day.date).locale('en').format('dddd')}`;
        date.innerHTML = `${dayjs(displayData.localTime).format('DD MMMM YYYY')}`;
        console.log(day.avgTempC);
        avgTempC.innerHTML = `${day.avgTempC}°`;
        condition.innerHTML = day.text;
        const imgPath = day.icon;
        icon.setAttribute('src', imgPath);
        icon.setAttribute('class', 'forecast-img');

        div.appendChild(weekday);
        div.appendChild(date);
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

// Method for displaying the data on the screen
const display = (JSONdata) => {
    const displayData = JSONdata;
    removeForecastData();

    city.innerHTML = displayData.city;
    country.innerHTML = displayData.country;
    localTime.innerHTML = `${dayjs(displayData.localTime).locale('en').format('dddd')}<br>`
    + `${dayjs(displayData.localTime).format('DD MMMM YYYY')}`;
    temperature.innerHTML = `Temperature: ${displayData.temperatureC}°`;
    feelsLike.innerHTML = `Feels like: ${displayData.feelsLikeC}°`;
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
const errorCallback = (error) => {
    console.log(error);
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
