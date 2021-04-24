import { storage } from "./storage.js";

import {
  cityNameSpan,
  mainImg,
  countryFlag,
  mainImgDescription,
  windSpeedValue,
  windDirection,
  windDirectionValue,
  windDirectionArrow,
  temp,
  tempOriginal,
  tempOriginalValue,
  tempFeelsLike,
  tempFeelsLikeValue,
  additional,
  additionalHumidity,
  additionalHumidityValue,
  additionalPressure,
  additionalPressureVlaue,
} from "./selectors.js";

export default (cityName) => {
  const data = storage[cityName];

  console.log(data);

  let countryFlags = data.sys.country + "";
  countryFlags.toLowerCase();
  let countryRes = countryFlags.toLowerCase();

  countryFlag.src = `https://www.countryflags.io/${countryRes}/flat/64.png`;
  countryFlag.style.cssText = `
  display: flex;
  margin-left: 30px;
  height: 80px;
  `;
  countryFlag.innerHTML = `https://www.countryflags.io/${countryRes}/flat/64.png`;
  cityNameSpan.innerHTML =  `${data.name} - ${data.sys.country}`;
  cityNameSpan.append(countryFlag);

  mainImg.src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  mainImg.alt = ` ${data.weather[0].description}`;
  mainImg.style.cssText = `
  display: flex;
  `;

  mainImgDescription.textContent = ` ${data.weather[0].description}`;
  mainImgDescription.style.cssText = `
  text-transform: capitalize;
  font-size: 22px;
  font-weight: bold;
  `;

  windSpeedValue.innerHTML = ` ${data.wind.speed} m/s`;

  if (data.wind.deg >= 0 && data.wind.deg <= 23) {
    windDirectionValue.innerHTML = ` North wind &#129045`;
  } else if (data.wind.deg >= 23 && data.wind.deg <= 68) {
    windDirectionValue.innerHTML = ` North-east wind &#11016`;
  } else if (data.wind.deg >= 68 && data.wind.deg <= 113) {
    windDirectionValue.innerHTML = ` East wind &#129046`;
  } else if (data.wind.deg >= 113 && data.wind.deg <= 158) {
    windDirectionValue.innerHTML = ` South-east wind &#11018`;
  } else if (data.wind.deg >= 158 && data.wind.deg <= 203) {
    windDirectionValue.innerHTML = ` South wind &#129047`;
  } else if (data.wind.deg >= 203 && data.wind.deg <= 248) {
    windDirectionValue.innerHTML = ` South-west wind &#11019`;
  } else if (data.wind.deg >= 248 && data.wind.deg <= 292) {
    windDirectionValue.innerHTML = ` West wind &#129044`;
  } else if (data.wind.deg >= 292 && data.wind.deg <= 337) {
    windDirectionValue.innerHTML = ` Noth-west wind &#11017`;
  } else if (data.wind.deg >= 337 && data.wind.deg <= 360) {
    windDirectionValue.innerHTML = ` Noth wind &#129045`;
  };

  tempOriginalValue.innerHTML = ` ${Math.round(data.main.temp - 273)} °C`;
  tempFeelsLikeValue.innerHTML = ` ${Math.round(data.main.feels_like - 273)} °C`;

  additionalHumidityValue.innerHTML = ` ${data.main.humidity}%`;
  additionalPressureVlaue.innerHTML = ` ${data.main.pressure}mmHg`;

};
