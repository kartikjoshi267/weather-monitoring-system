# Weather Monitoring System

## Github link (https://github.com/kartikjoshi267/weather-monitoring-system)

## Description

A web application that allows users to get the real-time weather data of metro cities of India. The application also provides alerts for weather conditions and temperature thresholds. The application uses the OpenWeatherMap API to get the weather data. The application also provides historical weather data for the selected city. The application also provides a summary of the weather data.

## How to run the application

1. Using docker:
  - Install the docker desktop application from https://www.docker.com/products/docker-desktop

  - Create a .env.local file with the following content:
  ```
    NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
    MONGODB_URI=mongodb://mongo:27017
  ```

  - Get the OpenWeatherMap API key from https://openweathermap.org/. Store it in the .env.local file.

  - Run the application using docker-compose:
  ```bash
  docker-compose up
  ```


1. Without docker:
  - Create a .env.local file with the following content:
  ```
    NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
    MONGODB_URI=mongodb://localhost:27017
  ```
  - Get the OpenWeatherMap API key from https://openweathermap.org/. Store it in the .env.local file.
  - Run the application using `npm run dev`