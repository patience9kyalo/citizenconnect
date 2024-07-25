import { Router } from "express"
import { addVote, getVoteByUserId, getVoteCounts } from "../Controllers/pollControllers"
import { verifyCitizenToken } from "../Middleware"

const pollVotesRoutes = Router()

pollVotesRoutes.post("", addVote),
pollVotesRoutes.get("/:Id", getVoteByUserId)

export default pollVotesRoutes