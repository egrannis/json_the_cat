const request = require('request');
const args = process.argv.slice(2);
const breedName = args[0];
let URL = `https://api.jsbgurbgibrthecatapi.com/v1/breeds/search?q=${breedName}` ;

request(URL, (error, response, body) => {
  if (error) {
  console.log('Error: URL not valid'); // Print the error if one occurred
  return;
  }
  const data = JSON.parse(body); // need to manipulate body for query to come into play
  const breed = data[0];
  if (breed) {
  console.log(breed.description); 
  } else {
  console.log(`Failed to find breed: ${breedName}`);
  }
});


// if breed exists, we want to find the description, if breed not found we want to say breed not found