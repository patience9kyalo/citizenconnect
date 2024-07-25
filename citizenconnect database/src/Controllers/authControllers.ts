import { Request, Response, RequestHandler } from 'express'
import { v4 as uid } from 'uuid'
import Bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import path from 'path'
import dotenv from 'dotenv'
import { DbHelper } from '../Database Helpers'
import { loginSchema, RegisterSchema } from '../Helpers'
import { Payload, User } from '../Models/authModel'
dotenv.config({ path: path.resolve(__dirname, "../../.env") })


const dbInstance = new DbHelper()


export const registerUser = async (req: Request, res: Response) => {
    try {
        const id = uid();
        const { Name, Email, Password, Role ,IsApproved } = req.body;
        console.log('Register User Request Body:', req.body);
        
        const { error } = RegisterSchema.validate(req.body);

        if (error) {
            return res.status(400).json(error.details[0].message);
        }

        const userExists = (await dbInstance.exec('getUser', {Id:id})).recordset as User[];

        if (userExists.length) {
            return res.status(400).json({ message: "User Exists" });
        }
        
        const HashPassword = await Bcrypt.hash(Password, 10);
        console.log('Hashed Password:', HashPassword);
        
        await dbInstance.exec('addUsers', { Id: id, Name, Email, Password: HashPassword, Role, IsApproved });
        console.log('User added to database:', { Id: id, Name, Email, Role, IsApproved});
        
        return res.status(201).json({ Message: "User Was Added Successfully!!" });

    } catch (error) {
        console.error('Register User Error:', error);
        return res.status(500).json(error);
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { Email, Password } = req.body;
        console.log(req.body);

        const { error } = loginSchema.validate(req.body);

        if (error) {
            return res.status(400).json(error.details[0].message);
        }

        const user = (await dbInstance.exec('getUserEmail', { Email })).recordset[0] as User;
        console.log(user);

        if (user) {
            const isValid = await Bcrypt.compare(Password, user.Password);
            console.log("here2");

            if (isValid) {
                console.log("here");

                // Check if the user is a government official and not approved
                if (user.Role === 'gvn' && user.IsApproved === 0) {
                    return res.status(403).json({ message: "Government official not approved yet" });
                }

                const payload: Payload = {
                    Sub: user.Id,
                    Id: user.Id,
                    Name: user.Name,
                    Role: user.Role
                };

                const token = jwt.sign(payload, process.env.SECRET as string, { expiresIn: '4h' });

                // Ensure Role is returned properly
                return res.status(200).json({ 
                    message: "Login success!!", 
                    token, 
                    Role: user.Role,  // Correct usage
                    payload // Ensure payload is part of the response
                });
            }
        }

        return res.status(400).json({ message: "Invalid Credentials" });

    } catch (error) {
        return res.status(500).json(error);
    }
};


export const getUser = async (req: Request<{ Id: string }>, res: Response) => {
    try {
        const user = (await dbInstance.exec('getUser', { Id: req.params.Id })).recordset[0] as User
        console.log(user)
        if (user && user.Id) {
            return res.status(200).json(user)
        }

        return res.status(404).json({ message: "User Not Found" })

    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUsersEmail = async (req: Request<{ Email: string }>, res: Response) => {
    try {
        const user = (await dbInstance.exec('getUserEmail', { Email: req.params.Email })).recordset[0] as User
        console.log(user)
        // if (user && user.Id) {
        //     return res.status(200).json(user)
        // }

        return res.status(404).json({ message: "User Not Found" })

    } catch (error) {
        res.status(500).json(error)
    }
}


export const getusersApproved = async (req: Request, res: Response) => {
    try {
        console.log("imefika hapa")
        const user = (await dbInstance.exec('getusersApproved', {})).recordset as User[]
        console.log(user)
        if (user) {
            return res.status(200).json(user)
        }

        return res.status(404).json({ message: "User Not Found" })

    } catch (error) {
        res.status(500).json(error)
    }
}

export const getusersnotApproved = async (req: Request, res: Response) => {
    try {
        const user = (await dbInstance.exec('getusersNotApproved', {})).recordset as User[]
        console.log(user)
        if (user) {
            return res.status(200).json(user)
        }

        return res.status(404).json({ message: "User Not Found" })

    } catch (error) {
        res.status(500).json(error)
    }
}


export async function getUsers(req: Request, res: Response) {
    console.log("GET");
    
    try {

        const users = (await dbInstance.exec('getUsers', {})).recordset as User[]
        console.log(users);
        
        return res.status(200).json(users)


    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function approveUsers(req: Request<{ Id: string }>, res: Response) {
    try {
        const user = (await dbInstance.exec('getUser', { Id: req.params.Id })).recordset[0] as User

        if (user && user.Id) {
            await dbInstance.exec('approveUsers', { Id: req.params.Id })
            return res.status(200).json({ Message: "User approved successfully" })
        }
        return res.status(404).json({ message: "User not found" })

    } catch (error) {
        return res.status(500).json(error)
    }
}

export async function rejectUsers(req: Request<{ Id: string }>, res: Response) {
    try {
        const user = (await dbInstance.exec('getUser', { Id: req.params.Id })).recordset[0] as User

        if (user && user.Id) {
            await dbInstance.exec('rejectUsers', { Id: req.params.Id })
            return res.status(200).json({ Message: "User rejected successfully" })
        }
        return res.status(404).json({ message: "User not found" })

    } catch (error) {
        return res.status(500).json(error)
    }
}


export async function updateUsers(req: Request<{ Id: string }>, res: Response) {
    try {

        const user = (await dbInstance.exec('getUser', { Id: req.params.Id })).recordset[0] as User

        if (user && user.Id) {

            if (user && user.Id) {
                const { Email, Name, Role, Password } = req.body

                if (user && user.Id) {
                    await dbInstance.exec("updateUser", { Id: req.params.Id, Email, Name, Role, Password })
                    return res.status(200).json({ message: "User updated" })
                }

                return res.status(200).json({ message: "User not found" })

            }
        }

    } catch (error) {
        return res.status(500).json(error)
    }
}


export async function deleteUsers(req: Request<{ Id: string }>, res: Response) {
    try {
        const user = (await dbInstance.exec('getUser', { Id: req.params.Id })).recordset[0] as User

        if (user && user.Id) {
            await dbInstance.exec('deleteUser', { Id: req.params.Id })
            return res.status(200).json({ Message: "User deleted successfully" })
        }
        return res.status(404).json({ message: "User not found" })

    } catch (error) {
        return res.status(500).json(error)
    }
}