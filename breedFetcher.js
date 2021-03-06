const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(URL, (error, response, body) => {
    if (error) {
      return callback(error, null); //error, which means we wouldn't get a desctiption, so descrip would be null
    }
    const data = JSON.parse(body); // need to manipulate body for query to come into play
    const breed = data[0];
    if (!breed) { // if breed exists, we want to find the description, if breed not found we want to say breed not found
      return callback(`Failed to find breed: ${breedName}`);
    } else {
      return callback(null, breed.description);
    }
  });
};

module.exports = { fetchBreedDescription };

// Below is an alternative way of writing the function
// const fetchBreedDescription = function(breedName, callback) {// callback takes 2 parameters, err + descrip

// const fetchBreedDescription = function(breedName, callback) {// callback takes 2 parameters, err + descrip
//   request(URL, (error, response, body) => {
//     if (body === '[]') { // haven't parsed through the data because
//       return callback(`Error: breed not found`, null);
//     }
//     if (error) {
//       return callback(error, null); //error, which means we wouldn't get a desctiption, so descrip would be null
//     }
//     const data = JSON.parse(body); // need to manipulate body for query to come into play
//     const breed = data[0];
//     callback(null, breed.description);
//   });
// };