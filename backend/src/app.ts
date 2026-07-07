import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) =>{
    res.json({
        message: "Inventory app SaaS is running"
    });
});

app.listen