import { Router } from "express"
import { verifyCitizenToken, verifyGvnToken, verifyToken } from "../Middleware"
import { addIncidents, deleteIncidents, getIncident, getIncidents, updateIncidents } from "../Controllers/incidentsController"

const incidentRoutes = Router()
incidentRoutes.post("", addIncidents)
incidentRoutes.get("", getIncidents)
incidentRoutes.get("/:incidentId",getIncident)
incidentRoutes.patch("/:incidentId",updateIncidents)
incidentRoutes.delete("/:incidentId",deleteIncidents)


export default incidentRoutes