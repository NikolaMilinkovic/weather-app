import './style.css';
import runCitySearch from './weatherAPI';

const body = document.querySelector('body');


const createNavbarDiv = () => {
    const nav = document.createElement('div');
    nav.setAttribute('class', 'navbar');
    return nav;
};

const createNavbarElements = () => {
    const input = document.createElement('input');
    input.setAttribute('id', 'input-city');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'City name');

    const button = document.createElement('button');
    button.setAttribute('id', 'btn-search');
    button.setAttribute('class', 'form-btn');
    button.innerHTML = 'Search';
    button.addEventListener('click', async () => {
        runCitySearch();
    });

    return [input, button];
};

const createNavbar = () => {
    const nav = createNavbarDiv();
    const navEls = createNavbarElements();

    navEls.forEach((element) => {
        nav.appendChild(element);
    });

    return nav;
};

const displayNavbar = () => {
    const nav = createNavbar();
    body.appendChild(nav);
};

export default displayNavbar;
