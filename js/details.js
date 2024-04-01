const API_URL = "https://restcountries.com/v3.1/name/"
const createCountryCard = (({name,flags,population,region,capital}) => {
    // console.log(name)
    document.getElementsByClassName("country-details")[0].innerHTML+= // TODO:: change element
    `<a href="#" class="country scale-effect" data-country-name="${name.common}">
    <div class="country-flag">
      <img
        src="${flags.png}"
        alt="${name.common} Flag"
      />
    </div>
    <div class="country-info">
      <h2 class="country-title">${name.common}</h2>
      <ul class="country-brief">
        <li><strong>population: </strong>${population}</li>
        <li><strong>Region: </strong>${region}</li>
        <li><strong>capital: </strong>${capital}</li>
      </ul>
    </div>
    </a>`;
    document.getElementsByClassName("loader")[0].classList.add("close");
})
const fetchAPI = async (urlEndpoint) => {
    const promise = fetch(API_URL + urlEndpoint)
    promise.then((res) => res.json()).then(countries=> createCountryCard(countries[0]))
    // promise.then((res) => res.json()).then(countries=> console.log(countries[0]))
}

fetchAPI(window.location.search.slice(window.location.search.indexOf('=')+1))