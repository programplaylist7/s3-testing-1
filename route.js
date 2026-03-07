import express from "express"
import { getUser, setUser } from "./user.js";
const route = express.Router();

route.get("/user", getUser);
route.post("/user", setUser);

export default route;