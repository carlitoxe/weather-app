const cardsContainer = document.querySelector('.cards-container');

const apiKey = '75877d6ce47cd008f2bcdfa2bc4aca27';
const baseUrl = 'https://api.openweathermap.org';
//const api = `${baseUrl}/data/2.5/weather?q=${city}&appid=${apiKey}`
const input = document.querySelector('input');
const submitButton = document.querySelector('button');

async function getData(event) {
    try {
        const city = input.value;
        const api = `${baseUrl}/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        const response = await fetch(api);
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function renderInfo(event) {
        event.preventDefault();
        const cardContainer = document.createElement("div");
        cardContainer.className = "weather-card p-4 w-48 h-60 min-h-fit shadow-2xl rounded-xl bg-blue-950 relative text-white text-center";
        const data = await getData();
        let view = `<!-- <svg  width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0721 0.355072C10.0721 0.239056 9.97714 0.144135 9.86112 0.144135L8.12089 0.152045L5.49999 3.27656L2.88173 0.154682L1.13886 0.146771C1.02284 0.146771 0.927917 0.239057 0.927917 0.357709C0.927917 0.407807 0.946374 0.455268 0.978015 0.494819L4.40839 4.58173L0.978015 8.66601C0.946154 8.70466 0.928475 8.75304 0.927917 8.80312C0.927917 8.91914 1.02284 9.01406 1.13886 9.01406L2.88173 9.00615L5.49999 5.88164L8.11825 9.00351L9.85849 9.01142C9.9745 9.01142 10.0694 8.91914 10.0694 8.80048C10.0694 8.75039 10.051 8.70293 10.0193 8.66337L6.59423 4.5791L10.0246 0.492182C10.0562 0.455268 10.0721 0.40517 10.0721 0.355072Z" fill="white"/>
                    </svg> -->
                    <div class="card-details">
                        <p class="city font-medium text-lg">${data.name}
                            <span>${data.sys.country}</span>
                        </p>
                        <p class="temperature text-5xl font-semibold mt-2">${data.main.temp}<span class="font-normal text-3xl">°C</span></p>
                    </div>
                    <div class="card-image text-center flex flex-col items-center">
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather">
                        <p class="uppercase text-sm font-medium text-gray-400">${data.weather[0].description}</p>
                    </div>`
        //cardContainer.dataset.id = id;
        cardContainer.innerHTML = view;
        cardsContainer.appendChild(cardContainer);
        input.value = "";
        input.placeholder = "Type the name of the city";
        //cardsInserted.push(id);

}

/* const cardsInserted = [];

const getWeatherData = async (event) => {    
        const { cardContainer, id } = await getData(input.value);
        //input.classList.remove("bad-input");

} */


submitButton.addEventListener('click', renderInfo)
input.addEventListener('submit', renderInfo)
input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
      renderInfo(event);
    }
  });