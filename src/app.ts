import express  , {Request , Response} from "express";
import playerRouter from "./routes/player.routes";
import { errorMiddleware } from "./middleware/error.middleware";

const app = express();
app.use(express.json());


app.get("/"  , (req : Request, res : Response)=>{
  res.send("Hi, Jexts here!")
})

app.use("/api/players" , playerRouter);

app.use(errorMiddleware);

export default app;
