const cardsContainer = document.querySelector('.cards-container');
const input = document.querySelector('input');
const button = document.querySelector('button');

const apiKey = '75877d6ce47cd008f2bcdfa2bc4aca27';
const baseUrl = 'https://api.openweathermap.org';
const api = `${baseUrl}/data/2.5/weather?lat=${lat}&${lon}&appid=${apiKey}`

async function fetchData(baseUrl) {
    const response = await fetch(api);
    const data = response.json();
    return data;
}
