import express, { json } from "express"
import cors from "cors"
import authRoutes from "./Routes/authRoutes"
import incidentRoutes from "./Routes/incidentRoutes"
import viewsRoutes from "./Routes/viewsRoutes"
import pollQuestionsRoutes from "./Routes/pollQuestionsRoutes"
import pollVotesRoutes from "./Routes/pollVotesRoutes"
import pollVoteCountRoutes from "./Routes/voteCountRoutes"


const app = express()

//middleware
app.use(json())
app.use(cors())
app.use("/users", authRoutes)
app.use("/incidents", incidentRoutes)
app.use("/views", viewsRoutes)
app.use("/pollQuestions", pollQuestionsRoutes)
app.use("/pollVotes", pollVotesRoutes)
app.use("/voteCount",pollVoteCountRoutes)


//port
app.listen(4000,()=>{
    console.log('Server running...')
})