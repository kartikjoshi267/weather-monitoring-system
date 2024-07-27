
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY!;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeatherData = async (city: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY
    }
  });
  return response.data;
};

export default fetchWeatherData;
