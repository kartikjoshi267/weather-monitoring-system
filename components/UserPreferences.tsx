import { useState } from 'react';
import { usePreferences } from '../context/PreferencesContext';

const UserPreferences = () => {
  const { temperatureThreshold, setTemperatureThreshold, weatherConditionThreshold, setWeatherConditionThreshold, city, setCity } = usePreferences();
  const [localTemperatureThreshold, setLocalTemperatureThreshold] = useState(temperatureThreshold);
  const [localWeatherConditionThreshold, setLocalWeatherConditionThreshold] = useState(weatherConditionThreshold);
  const [localCity, setLocalCity] = useState(city);

  const handleSave = () => {
    setTemperatureThreshold(localTemperatureThreshold);
    setWeatherConditionThreshold(localWeatherConditionThreshold);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value as 'Delhi' | 'Mumbai' | 'Chennai' | 'Bangalore' | 'Kolkata' | 'Hyderabad');
    setLocalCity(e.target.value as 'Delhi' | 'Mumbai' | 'Chennai' | 'Bangalore' | 'Kolkata' | 'Hyderabad');
  }

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <div className="mb-4">
        <label className="block mb-1">Change City:</label>
        <select value={localCity} onChange={handleCityChange} className="border rounded p-2">
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>
      <h2 className="text-xl font-bold mt-4">User Preferences</h2>
      <div className="mb-4">
        <label className="block mb-1">Temperature Threshold:</label>
        <input
          type="number"
          value={localTemperatureThreshold}
          onChange={(e) => setLocalTemperatureThreshold(parseFloat(e.target.value))}
          className="border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Weather Condition Threshold:</label>
        <input
          type="text"
          value={localWeatherConditionThreshold}
          onChange={(e) => setLocalWeatherConditionThreshold(e.target.value)}
          className="border rounded p-2"
        />
      </div>
      <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-4 rounded">Save Preferences</button>
    </div>
  );
};

export default UserPreferences;
