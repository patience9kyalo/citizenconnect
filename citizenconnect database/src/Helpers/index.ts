import Joi from "joi";

export const RegisterSchema = Joi.object({
    Name: Joi.string().required(),
    Email: Joi.string().required().email(),
    Password: Joi.string().required().pattern(
        new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ),
    Role: Joi.string().required().messages({ 'string.name': "Please enter a valid role" })
})

export const loginSchema = Joi.object({
    Email: Joi.string().required().email(),
    Password: Joi.string().required().pattern(
        new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    ),
})

export const incidentsSchema = Joi.object({
    incidentLocation: Joi.string().required(),
    incidentStatus: Joi.string().required(),
    incidentDescription: Joi.string().required(),
    incidentImage: Joi.string().required(),
})

export const pollsSchema = Joi.object({
    QuestionText:Joi.string().required(),
    choices:Joi.string().required()
})

export const viewsSchema = Joi.object({
    viewDescription:Joi.string().required()
})


