
import mongoose from 'mongoose';

const weatherSummarySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  city: { type: String, required: true },
  averageTemperature: { type: Number, required: true },
  maxTemperature: { type: Number, required: true },
  minTemperature: { type: Number, required: true },
  dominantCondition: { type: String, required: true }
}, {timestamps: true});

export default mongoose.models.WeatherSummary || mongoose.model('WeatherSummary', weatherSummarySchema);
