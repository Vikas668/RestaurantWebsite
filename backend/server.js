
const PORT=4000;

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();


app.use(
  cors({
    origin: "https://6620b084fab17a022263932e--gregarious-kleicha-3dd519.netlify.app/",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/reservation", reservationRouter);
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN"
  })
})

dbConnection();

app.use(errorMiddleware);

export default app;

app.listen(PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
})