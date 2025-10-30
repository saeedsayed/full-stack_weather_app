import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: String,
  state: String,
  country: String,
  coord: {
    lon: Number,
    lat: Number,
  },
});

const CityModel = mongoose.model("city", citySchema);

export default CityModel
