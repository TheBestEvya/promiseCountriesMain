const API_URL = "https://restcountries.com/v3.1"
const createCountryCard = (({name,flags,population,region,capital}) => {
    document.getElementsByClassName("countries-grid")[0].innerHTML+=`<a href="#" class="country scale-effect" data-country-name="${name.common}">
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
    </a>`
})
const fetchAPI = async (urlEndpoint) => {
    const promise = fetch(API_URL + urlEndpoint)
    promise.then((res) => res.json()).then(countries=> countries.map(country=> createCountryCard(country)))
}

 fetchAPI("/all");
