const body = document.querySelector('body');
const createElements = () => {
    const city = document.createElement('h1');
    city.setAttribute('id', 'city');
    const country = document.createElement('para');
    country.setAttribute('id', 'country');
    const weekday = document.createElement('para');
    weekday.setAttribute('id', 'weekday');
    const temperature = document.createElement('para');
    temperature.setAttribute('id', 'temperature');
    const feelsLike = document.createElement('para');
    feelsLike.setAttribute('id', 'feels-like');


    return [city, country, weekday, temperature, feelsLike];
};

const createImgElements = () => {
    const img = document.createElement('img');
    img.setAttribute('id', 'weather-img');
    const text = document.createElement('para');
    text.setAttribute('id', 'weather-text');

    return [img, text];
};

const appendElements = (elementsArray, imgElementsArray) => {
    const parentDiv = document.createElement('div');
    const dataDiv = document.createElement('div');
    const divImg = document.createElement('div');
    parentDiv.setAttribute('id', 'main-weather-container');
    dataDiv.setAttribute('id', 'weather-data-container');
    divImg.setAttribute('id', 'weather-img-container');

    // Handles appending data via arrays
    elementsArray.forEach((element) => {
        dataDiv.appendChild(element);
    });
    imgElementsArray.forEach((element) => {
        divImg.appendChild(element);
    });

    // Handles appending divs to body
    parentDiv.appendChild(dataDiv);
    parentDiv.appendChild(divImg);
    body.insertBefore(parentDiv, body.firstChild);
};

const displayWeatherToday = () => {
    appendElements(createElements(), createImgElements());
};

export default displayWeatherToday;
