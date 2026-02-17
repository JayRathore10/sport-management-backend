import { Router } from "express";
import { test } from "../controllers/admin.controller";

const adminRouter = Router();

adminRouter.get("/test" , test);

export default adminRouter;