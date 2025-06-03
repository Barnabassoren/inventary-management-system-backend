import express from "express";
import cookieParser from "cookie-parser";
const app = express();
import cors from "cors";
app.use(cors({
  origin: "*", // Allow all origins
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());



app.get("/", (req, res) => {
  res.send("Welcome to the API");
});


// location routes
import locationRoutes from "./routes/location.route.js";
app.use("/api/v1/locations", locationRoutes);


export { app };
