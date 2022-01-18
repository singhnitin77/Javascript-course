// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request);

// Consuming Promises

/* const getCountryData = function (country) {
       fetch(`https://restcountries.eu/rest/v2/name/${country}`)
         .then(function (response) {
           console.log(response);
         })
    });
};
getCountryData('portugal'); */

const getCountryData = function (country) {
       fetch(`https://restcountries.eu/rest/v2/name/${country}`)
         .then(function (response) {
           console.log(response);
            return response.json();
         })
          .then(function (data) {
            console.log(data);
       renderCountry(data[0]);
     });
};
getCountryData('portugal')
