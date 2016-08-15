import axios from 'axios';

const API_KEY = '0aa67da668a75396ce1da3e751f6683f';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY + '&q=';

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${API_URL}${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
