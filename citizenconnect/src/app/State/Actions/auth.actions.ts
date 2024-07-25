import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { LoginReq, LoginResponse, RegisterResponse, User } from "../../Models/users";

export const authActions = createActionGroup({
    source: 'AUTH API',
    events: {
        'login': props<{ user: LoginReq }>(),
        'login success': props<{ response: LoginResponse }>(),
        'login failure': props<{ message: string }>(),


        'register': props<{ user: User }>(),
        'register success': props<{ response: RegisterResponse }>(),
        'register failure': props<{ Message: string }>(),

        // Fetch all users
        'get Users': emptyProps(),
        'get Users success': props<{ user: User[] }>(),
        'get Users failure': props<{ message: string }>(),

        // Fetch approved users
        'get Approved Users': emptyProps(),
        'get Approved Users Success': props<{ users: User[] }>(),
        'get Approved Users Failure': props<{ message: string }>(),

        // Fetch non-approved users
        'get Not Approved Users': emptyProps(),
        'get Not Approved Users Success': props<{ users: User[] }>(),
        'get Not Approved Users Failure': props<{ message: string }>(),

        // Approve user
        'Approve User': props<{ Id: string }>(),
        'Approve User Success': props<{ Id: string }>(),
        'Approve User Failure': props<{ message: string }>(),


        // Reject user
        'Reject user': props<{ Id: string }>(),
        'Reject user success': props<{ Id: string }>(),
        'Reject user failure': props<{ message: string }>(),

        // Update user
        'Update User': props<{ user: User }>(),
        'Update User Success': props<{ user: User }>(),
        'Update User Failure': props<{ message: string }>(),

        // Delete user
        'Delete User': props<{ Id: string }>(),
        'Delete User Success': props<{ Id: string }>(),
        'Delete User Failure': props<{ message: string }>(),

    }

})