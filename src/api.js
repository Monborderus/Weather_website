import key from "../config/secret-api-key.js";

// export default (cityName) => {
//   return fetch(
//     `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
//   )
//     .then((responce) => responce.json())
//     .then((data) => data)
//     .catch((err) => console.log(err))
//     .finally(() => alert("Промис завершён"));
// };

export default async (cityName) => {
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
  );

  const parsedData = await data.json();

  return parsedData;
};
