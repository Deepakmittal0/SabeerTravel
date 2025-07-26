import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleWare } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

// ✅ Load .env config
dotenv.config({ path: "./Confiq/Config.env" });

// ✅ Setup CORS to allow frontend requests
app.use(
  cors({
    origin: [process.env.FRONTEND_URL], // example: http://localhost:3000
    methods: ["POST"],
    credentials: true,
  })
);

// ✅ Parse incoming JSON & form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Connect MongoDB
dbConnection();

// ✅ Reservation Route
app.use("/api/v1/Sabeer", reservationRouter);

// ✅ Error Middleware
app.use(errorMiddleWare);

// ✅ Optional test route (health check)
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;
