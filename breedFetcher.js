const request = require('request');
const args = process.argv.slice(2);
const breedName = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
  console.log('Error: breed not found', error); // Print the error if one occurred
  return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description); 
});
