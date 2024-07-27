
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TrendsChart = ({ data }: { data: any }) => {
  const chartData = {
    labels: data.map((entry: any) => new Date(entry.dt * 1000).toLocaleTimeString()),
    datasets: [
      {
        label: 'Temperature',
        data: data.map((entry: any) => entry.main.temp),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Feels Like',
        data: data.map((entry: any) => entry.main.feels_like),
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default TrendsChart;
