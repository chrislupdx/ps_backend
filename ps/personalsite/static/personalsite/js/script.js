function getexist() {
fetch('https://exist.io/api/1/users/$self/today/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}
getexist();

// const axios = require('axios')

// const getBreeds = () => {
//   try {
//     return axios.get('https://dog.ceo/api/breeds/list/all')
//   } catch (error) {
//     console.error(error)
//   }
// }


// function fetch_exist() {
//     fetch('https://exist.io/api/1/users/$self/today/')
//      .then(function(response) {
//         return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });
// }

// const url = 'https://exist.io/api/1/users/$self/today/'

// fetch(url).then(data=>console.log(data));

