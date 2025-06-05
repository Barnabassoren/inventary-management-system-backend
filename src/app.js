import express from "express";
import cookieParser from "cookie-parser";
const app = express();
import cors from "cors";
app.use(
  cors({
    origin: "*", // Allow all origins
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (_, res) => {
  res.send("Welcome to the API");
});

// location routes
import locationRoutes from "./routes/location.route.js";
app.use("/api/v1/locations", locationRoutes);

// sub-location routes
import subLocationRoutes from "./routes/subLocation.routes.js";
app.use("/api/v1/sub-locations", subLocationRoutes);

export { app };
