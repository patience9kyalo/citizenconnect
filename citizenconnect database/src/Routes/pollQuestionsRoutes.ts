import { Router } from "express"
import { addPollQuestions, addVote, getPollQuestion, getPollQuestionsWithChoices } from "../Controllers/pollControllers"
import { verifyCitizenToken, verifyGvnToken, verifyToken } from "../Middleware"

const pollQuestionsRoutes = Router()
pollQuestionsRoutes.post("", addPollQuestions)
pollQuestionsRoutes.get("", getPollQuestionsWithChoices)
pollQuestionsRoutes.get("/:QuestionId", getPollQuestion)




export default pollQuestionsRoutes