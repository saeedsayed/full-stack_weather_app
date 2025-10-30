import e from "express";
import { getWeatherByCityName } from "../controllers/weather.controller.js";

const router = e.Router();

router.route("/").get(getWeatherByCityName);

export default router;
