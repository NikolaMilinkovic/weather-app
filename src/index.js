import './style.css';
import runCitySearch from './weatherAPI';


// Btn logic
const searchBtn = document.getElementById('btn-search');
searchBtn.addEventListener('click', async () => {
    runCitySearch();
});
