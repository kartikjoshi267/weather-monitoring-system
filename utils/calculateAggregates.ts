
import { format } from 'date-fns';

const calculateAggregates = (data: any[]) => {
  const aggregates: any[] = [];

  let averageTemperature = data[0].main.temp;
  let maxTemperature = data[0].main.temp_max;
  let minTemperature = data[0].main.temp_min;
  let city = data[0].name;
  let dominantCondition = data[0].weather[0].main;

  aggregates.push({
    date: format(new Date(), 'yyyy-MM-dd'),
    city,
    averageTemperature,
    maxTemperature,
    minTemperature,
    dominantCondition
  });

  return aggregates;
};

export { calculateAggregates };
