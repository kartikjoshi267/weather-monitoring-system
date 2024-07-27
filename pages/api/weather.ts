
import type { NextApiRequest, NextApiResponse } from 'next';
import fetchWeatherData from '../../utils/fetchWeatherData';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const weatherData = await fetchWeatherData(req.query.city ? req.query.city as string : 'Delhi');
    
    res.status(200).json({
      ...weatherData,
      main: {
        ...weatherData.main,
        temp: weatherData.main.temp - 273.15,
        temp_min: weatherData.main.temp_min - 273.15,
        temp_max: weatherData.main.temp_max - 273.15,
        feels_like: weatherData.main.feels_like - 273.15
      }
    });
  } catch (error) {
    console.error('Failed to fetch weather data', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};
