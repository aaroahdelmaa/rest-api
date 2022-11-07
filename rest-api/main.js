const countriesList = document.getElementById("countries");
let countries; 


countriesList.addEventListener("change", function(event) {
  displayCountryInfo(event.target.value);
});


fetch("https://restcountries.com/v3.1/all")
.then(res =>  res.json())
.then(data => initialize(data))
.catch(err => console.log("Error", err ));

function initialize(countriesData) {
  countries = countriesData;
  let options = "";
  countries.forEach(country => options += `<option value="${country.cca3}">${country.name.common}</option>`);
  countriesList.innerHTML = options;
  displayCountryInfo("FIN");
}

function displayCountryInfo(countryBycca3) {
  const countryData = countries.find(country => country.cca3 === countryBycca3);
  console.log(countryData);
  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
  document.getElementById("region").innerHTML = countryData.region;
  document.querySelector("#flag-container img").src = countryData.flags.png;
  document.querySelector("#flag-container img").alt = `Flag of ${countryData.name.common}`;
}


