import e from "express";
import { searchByCityName } from "../controllers/search.controller.js";

const router = e.Router()

router.route("/").get(searchByCityName)

export default router