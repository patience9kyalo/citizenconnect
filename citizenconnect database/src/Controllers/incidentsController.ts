import { DbHelper } from "../Database Helpers"
import { Request, Response, RequestHandler } from 'express'
import { v4 as uid } from 'uuid'
import { Incident, IncidentsRequest } from "../Models/incidentsModel"
import { incidentsSchema } from "../Helpers"

const dbInstance= new DbHelper()

export const addIncidents=async(req:IncidentsRequest, res:Response)=>{
    try {
        
        const incidentId =uid()

        const {incidentLocation, incidentStatus, incidentDescription,incidentImage}= req.body

        const { error } = incidentsSchema.validate(req.body);

        if (error) {
            return res.status(400).json(error.details[0].message);
        }

        await dbInstance.exec("addIncidents", {incidentId: incidentId, incidentLocation, incidentStatus, incidentDescription, incidentImage})

        res.status(201).json({message:"Incident added"})

    } catch (error) {
        
        res.status(500).json(error)
    }
}


export const getIncidents:RequestHandler= async(req,res)=>{
    try {
        const incidents=(await dbInstance.exec('getIncidents',{})).recordset as Incident[]
        res.status(200).json(incidents)
    } catch (error) {
        res.status(500).json(error)
    }
    }
    

export const getIncident= async(req:Request<{incidentId:string}>,res:Response)=>{
    try {
        const incident=( await dbInstance.exec('getIncident',{incidentId:req.params.incidentId})). recordset[0] as Incident
        if(incident && incident.incidentId){
            return res.status(200).json(incident)
        }

        return res.status(404).json({message:"Incident Not Found"})

    } catch (error) {
        res.status(500).json(error)
    }
    }
    


export const updateIncidents=async (req:Request<{incidentId:string}>,res:Response)=>{
    try {
        
        const incident=(await dbInstance.exec('getIncident', {incidentId:req.params.incidentId})).recordset[0] as Incident

         if(incident && incident.incidentId){

            const {incidentLocation, incidentStatus, incidentDescription,incidentImage, Id}=req.body

            await dbInstance.exec('updateIncidents', {incidentId:req.params.incidentId, incidentLocation, incidentStatus, incidentDescription,incidentImage,Id})

            console.log(incident)
            
             return res.status(200).json({message:"Incident Updated!"})
             
         }

         return res.status(404).json({Message:'Incident not Found!'})
    } catch (error) {
        return res.status(500).json(error)
    }
}


export const deleteIncidents=async (req:Request<{incidentId:string}>,res:Response)=>{
    try {
        const incident=(await dbInstance.exec('getIncident', {incidentId:req.params.incidentId})).recordset[0] as Incident
 
         if(incident && incident.incidentId){
            await dbInstance.exec('deleteIncidents', {incidentId:req.params.incidentId})
             return res.status(200).json({Message:"Incident deleted Sucessfully!!"})
         }
         return res.status(404).json({Message:'Incident not Found!'})
    } catch (error) {
        return res.status(500).json(error)
    }
}