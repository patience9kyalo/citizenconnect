import { Router } from "express";
import { getVoteCounts } from "../Controllers/pollControllers";
import { verifyToken } from "../Middleware";

const pollVoteCountRoutes = Router()

pollVoteCountRoutes.get("/:ChoicesId",getVoteCounts)

export default pollVoteCountRoutes