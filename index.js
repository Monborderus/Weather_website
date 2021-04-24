import fetchWeatherDataByCity from "./src/api.js";
import render from "./src/render-city-weather.js";
import { storage } from "./src/storage.js";
import { select, button } from "./src/selectors.js";

button.addEventListener("click", async () => {
  storage[select.value] = await fetchWeatherDataByCity(select.value);

  render(select.value);
});
