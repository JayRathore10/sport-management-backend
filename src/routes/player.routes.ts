import {Router} from "express";
import { test } from "../controllers/player.controller";

const playerRouter = Router();

playerRouter.get("/test" , test);

export default playerRouter;