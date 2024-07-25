import { Router } from "express"
import { addViews, deleteViews, getView, getViews, updateViews } from "../Controllers/viewsController"
import { verifyCitizenToken } from "../Middleware"

const viewsRoutes = Router()
viewsRoutes.post("", addViews)
viewsRoutes.get("", getViews)
viewsRoutes.get("/:viewId", getView)
viewsRoutes.patch("/:viewId", updateViews)
viewsRoutes.delete("/:viewId", deleteViews)


export default viewsRoutes