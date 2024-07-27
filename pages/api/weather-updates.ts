import { NextApiRequest, NextApiResponse } from 'next';
import fetchWeatherData from '../../utils/fetchWeatherData';
import mongoose from 'mongoose';
import WeatherSummary from '../../models/WeatherSummary';
import { NextApiResponseServerIo } from '@/types';

const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];

const handler = async (req: NextApiRequest, res: NextApiResponseServerIo) => {
  const { city } = req.query;

  if (!city || !cities.includes(city as string)) {
    res.status(400).json({
      error: 'Invalid city'
    });
    return;
  }

  const sendWeatherUpdates = async () => {
    try {
      
      if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(process.env.MONGODB_URI!, { dbName: 'weather' });
      }

      
      let weatherData = await fetchWeatherData(city as string);
      
      
      weatherData = {
        ...weatherData,
        main: {
          ...weatherData.main,
          temp: weatherData.main.temp - 273.15,
          temp_min: weatherData.main.temp_min - 273.15,
          temp_max: weatherData.main.temp_max - 273.15,
          feels_like: weatherData.main.feels_like - 273.15
        }
      };

      
      await WeatherSummary.create({
        date: new Date(weatherData.dt * 1000), 
        city: weatherData.name,
        averageTemperature: (weatherData.main.temp + weatherData.main.temp_min + weatherData.main.temp_max) / 3,
        maxTemperature: weatherData.main.temp_max,
        minTemperature: weatherData.main.temp_min,
        dominantCondition: weatherData.weather[0].main,
      });

      
      res.status(200).json({
        data: weatherData,
      });
    } catch (error) {
      res.status(500).json({
        error: 'Internal server error',
      });
    }
  };

  
  await sendWeatherUpdates().catch(err => console.error('Error in initial weather update:', err));

  
  req.on('close', () => {
    res.end();
  });
};

export default handler;
