import key from "./config/secret-api-key.js";

console.log("index file", key);

let weather = null;

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${key}`)
  .then((responce) => {
    return responce.json();
  })
  .then((data) => {
    weather = data;

    document.body.prepend(data.name);
    document.body.prepend(data.visibility);
  })
  .catch((err) => console.log(err));
