import express from "express";
import cookieParser from "cookie-parser";
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true, limit : "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());



app.get("/", (req, res) => {
    res.send("Inventary management server is live now")
})





export {app};
