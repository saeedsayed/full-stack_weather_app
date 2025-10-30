import express from "express";
import dotenv from "dotenv";
import connectDb from "./configuration/db.config.js";
import cors from "cors";
import weatherRoutes from "./routes/weather.route.js";
import searchRoutes from "./routes/search.route.js"
dotenv.config();
connectDb();
const app = express();
const port = process.env.PORT;
app.use(cors());

app.use("/api/v1/weather", weatherRoutes);
app.use("/api/v1/search", searchRoutes)

// handling global error
app.use((err, req, res, next) => {
  console.log("err", err);
  res.status(err.code || 500).json({
    status: err.status || "error",
    message: err.message || "internal server error",
    code: err.code,
    data: err.data,
  });
});

app.listen(port, () => {
  console.log("app running on port " + port + " 🚀");
});
