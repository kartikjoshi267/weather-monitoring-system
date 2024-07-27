
import { createContext, useContext, useState, ReactNode } from 'react';

interface PreferencesContextType {
  temperatureThreshold: number;
  city: 'Delhi' | 'Mumbai' | 'Chennai' | 'Bangalore' | 'Kolkata' | 'Hyderabad';
  setCity: (city: 'Delhi' | 'Mumbai' | 'Chennai' | 'Bangalore' | 'Kolkata' | 'Hyderabad') => void;
  setTemperatureThreshold: (threshold: number) => void;
  weatherConditionThreshold: string;
  setWeatherConditionThreshold: (condition: string) => void;
}

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [temperatureThreshold, setTemperatureThreshold] = useState<number>(35);
  const [weatherConditionThreshold, setWeatherConditionThreshold] = useState<string>('Rain');
  const [city, setCity] = useState<'Delhi' | 'Mumbai' | 'Chennai' | 'Bangalore' | 'Kolkata' | 'Hyderabad'>('Delhi');

  return (
    <PreferencesContext.Provider value={{ temperatureThreshold, setTemperatureThreshold, weatherConditionThreshold, setWeatherConditionThreshold, city, setCity }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
};
