import { Router } from "express";
import { test } from "../controllers/sport.controller";

const sportRouter = Router();

sportRouter.get("/test" , test);

export default sportRouter;