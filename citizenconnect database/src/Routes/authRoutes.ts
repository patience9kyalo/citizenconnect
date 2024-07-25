import { Router } from "express"
import { approveUsers, deleteUsers, getUser, getUsers, getusersApproved, getusersnotApproved, loginUser, registerUser, rejectUsers, updateUsers} from "../Controllers/authControllers"
import { verifyToken } from "../Middleware"

const authRoutes = Router()

authRoutes.post("/register", registerUser)
authRoutes.post("/login", loginUser)
authRoutes.get("/:Id",verifyToken, getUser)
authRoutes.get("", getUsers)
authRoutes.get("/approve/approve/:Id", approveUsers)
authRoutes.get("/reject/reject/:Id", rejectUsers)
authRoutes.patch("/:Id", updateUsers)
authRoutes.delete("/:Id", deleteUsers)
authRoutes.get("/approve/new/new", getusersApproved)
authRoutes.get("/reject/new/new", getusersnotApproved)

export default authRoutes