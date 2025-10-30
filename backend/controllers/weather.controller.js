import appError from "../utils/appError.js";

export const getWeatherByCityName = async (req, res, next) => {
    const cityName = req.query.city
    if(!cityName){
        const err = appError.create({message:"NO city name provide", status:"fail", code:400})
        return next(err)
    }
  const request = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=64e138c149426df3a8b7a134d6f6a5f4&units=metric&q=${cityName}`
  );
  const data = await request.json();
  res.json(data);
};
