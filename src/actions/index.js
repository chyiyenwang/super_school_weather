const API_KEY = '14a9fdd858e7f446ebd55fe049c90bfb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = fetch(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};