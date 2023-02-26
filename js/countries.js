const loadCountries = () => {
  fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => displayCountries(data))
    .catch(err => console.log(err))
};

loadCountries();

const displayCountries = countries => {
  // console.log(countries);
  const countriesParent = document.getElementById("countries-parent");

  countries.forEach(country => {
    // console.log(country.languages[0.].name);

    const col = document.createElement("div");
    col.classList.add("col");
    col.innerHTML = `
        <div class="card h-100">
          <img src="${country.flags.png}" class="card-img-top h-75" alt="...">
          <div class="card-body">
            <h5 class="card-title">${country.name}</h5>
          </div>
        </div>`

    countriesParent.appendChild(col);

    // select region
    const regionMenu = document.getElementById("region-menu");
    const li1 = document.createElement("li");
    li1.innerHTML = `
        <a onclick="loadRegionCountry('${country.region}')" class="dropdown-item" href="#">${country.region}</a>`;

    regionMenu.appendChild(li1);

    // select capital
    const capitalMenu = document.getElementById("capital-menu");
    const li2 = document.createElement("li");
    li2.innerHTML = `
        <a onclick="loadCapital('${country.capital}')" class="dropdown-item" href="#">${country.capital}</a>`;

    capitalMenu.appendChild(li2);

    // select by language
    const languageMenu = document.getElementById("language-menu");
    const li3 = document.createElement("li");
    li3.innerHTML = `
        <a onclick="loadByLang('${country.languages[0].name}')" class="dropdown-item" href="#">${country.languages[0.].name}</a>`;

    languageMenu.appendChild(li3);
  })
};

// region country
const loadRegionCountry = region => {
  // console.log(region);
  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
    .catch(err => console.log(err))
};

// select capital
const loadCapital = capital => {
  fetch(`https://restcountries.com/v3.1/capital/${capital}`)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
};

// select by language
const loadByLang = language => {
  fetch(`https://restcountries.com/v3.1/lang/${language}`)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
};

const displayCountryDetails = countryDetails => {
  // console.log(countryDetails);

  const countriesParent = document.getElementById("countries-parent");
  countriesParent.innerHTML = "";

  countryDetails.forEach(country => {
    // console.log(country.name.common);

    const col = document.createElement("div");
    col.classList.add("col");
    col.innerHTML = `
        <div class="card h-100">
          <img src="${country.flags.png}" class="card-img-top h-75" alt="...">
          <div class="card-body">
            <h5 class="card-title">${country.name.common}</h5>
          </div>
        </div>`

    countriesParent.appendChild(col);
  })
};