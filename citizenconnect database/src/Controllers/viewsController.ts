import { DbHelper } from "../Database Helpers"
import { v4 as uid } from 'uuid'
import { Views, ViewsRequest } from "../Models/viewsModel"
import { Request, Response, RequestHandler } from 'express'
import { viewsSchema } from "../Helpers"

const dbInstance= new DbHelper()

export const addViews=async(req:ViewsRequest, res:Response)=>{
    try {
        
        const viewId =uid()
        const {viewDescription}= req.body

        const { error } = viewsSchema.validate(req.body);

        if (error) {
            return res.status(400).json(error.details[0].message);
        }
        await dbInstance.exec("addViews",{viewId:viewId, viewDescription})
        res.status(201).json({message:"view added"})

    } catch (error) {
        
        res.status(500).json(error)
    }
}


export const getViews:RequestHandler= async(req,res)=>{
    try {
        const views=(await dbInstance.exec('getViews',{})).recordset as Views[]
        res.status(200).json(views)
    } catch (error) {
        res.status(500).json(error)
    }
    }
    

export const getView= async(req:Request<{viewId:string}>,res:Response)=>{
    try {
        const view=( await dbInstance.exec('getView',{viewId:req.params.viewId})). recordset[0] as Views
        if(view && view.viewId){
            return res.status(200).json(view)
        }

        return res.status(404).json({message:"view Not Found"})

    } catch (error) {
        res.status(500).json(error)
    }
    }
    


export const updateViews=async (req:Request<{viewId:string}>,res:Response)=>{
    try {
        
        const view=(await dbInstance.exec('getView', {viewId:req.params.viewId})).recordset[0] as Views
         if(view && view.viewId){
            const {viewDescription, Id}=req.body
            await dbInstance.exec('updateViews', {viewId:req.params.viewId, viewDescription,Id})
            console.log(view)
             return res.status(200).json({message:"view Updated!"})
             
         }
         return res.status(404).json({Message:'view not Found!'})
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const deleteViews=async (req:Request<{viewId:string}>,res:Response)=>{
    try {
        const view=(await dbInstance.exec('getView', {viewId:req.params.viewId})).recordset[0] as Views
 
         if(view && view.viewId){
            await dbInstance.exec('deleteViews', {viewId:req.params.viewId})
             return res.status(200).json({Message:"view deleted Sucessfully!!"})
         }
         return res.status(404).json({Message:'view not Found!'})
    } catch (error) {
        return res.status(500).json(error)
    }
}