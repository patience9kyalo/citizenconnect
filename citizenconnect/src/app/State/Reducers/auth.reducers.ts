import { createReducer, on } from "@ngrx/store"
import { authActions } from "../Actions/auth.actions"
import { User } from "../../Models/users";

export interface authInterface {
    loginSuccessMessage: string;
    loginErrorMessage: string;
    loginLoading: boolean;

    registerSuccessMessage: string;
    registerErrorMessage: string;
    registerLoading: boolean;

    users: User[];
    usersLoading: boolean;
    usersErrorMessage: string;

    approvedUsers: User[];
    approvedUsersLoading: boolean;
    approvedUsersErrorMessage: string;

    notApprovedUsers: User[];
    notApprovedUsersLoading: boolean;
    notApprovedUsersErrorMessage: string;

    approveUserLoading: boolean;
    approveUserErrorMessage: string;

    rejectUserLoading: boolean;
    rejectUserErrorMessage: string;

    updateUserLoading: boolean;
    updateUserSuccessMessage: string;
    updateUserErrorMessage: string;

    deleteUserLoading: boolean;
    deleteUserSuccessMessage: string;
    deleteUserErrorMessage: string;
}


const initialState: authInterface = {
    loginSuccessMessage: '',
    loginErrorMessage: '',
    loginLoading: false,

    registerSuccessMessage: '',
    registerErrorMessage: '',
    registerLoading: false,

    users: [],
    usersLoading: false,
    usersErrorMessage: '',

    approvedUsers: [],
    approvedUsersLoading: false,
    approvedUsersErrorMessage: '',

    notApprovedUsers: [],
    notApprovedUsersLoading: false,
    notApprovedUsersErrorMessage: '',

    approveUserLoading: false,
    approveUserErrorMessage: '',

    rejectUserLoading: false,
    rejectUserErrorMessage: '',

    updateUserLoading: false,
    updateUserSuccessMessage: '',
    updateUserErrorMessage: '',

    deleteUserLoading: false,
    deleteUserSuccessMessage: '',
    deleteUserErrorMessage: '',
};


export const authReducer = createReducer(

    initialState,

    on(authActions.login, (state) => {

        return {
            ...state,
            loginErrorMessage: '',
            loginSuccessMessage: '',
            loginLoading: true

        }
    }),

    on(authActions.loginSuccess, (state, action) => {
        return {
            ...state,
            loginErrorMessage: '',
            loginSuccessMessage: action.response.message,
            loginLoading: false
        }
    }),

    on(authActions.loginFailure, (state, { message }) => {
        return {
            ...state,
            loginErrorMessage: message,
            loginSuccessMessage: '',
            loginLoading: false
        }
    }),

    on(authActions.register, (state) => {
        return {
            ...state,
            registerErrorMessage: '',
            registerSuccessMessage: '',
            registerLoading: true
        }
    }),

    on(authActions.registerSuccess, (state, action) => {
        return {
            ...state,
            registerErrorMessage: '',
            registerSuccessMessage: action.response.Message,
            registerLoading: false
        }
    }),

    on(authActions.registerFailure, (state, { Message }) => {
        return {
            ...state,
            registerErrorMessage: Message,
            registerSuccessMessage: '',
            registerLoading: false
        }
    }),


    // Get Users actions
    on(authActions.getUsers, (state) => {
        return {
            ...state,
            usersLoading: true,
            usersErrorMessage: ''
        }

    }),

    on(authActions.getUsersSuccess, (state, { user }) => {

        return{
            ...state,
        users: user,
        usersLoading: false
        }
        
    }),

    on(authActions.getUsersFailure, (state, { message }) => {
        return{
            ...state,
        usersErrorMessage: message,
        usersLoading: false
        }
        
    }),

    // Get Approved Users actions
    on(authActions.getApprovedUsers, (state) => {

        return{
            ...state,
        approvedUsersLoading: true,
        approvedUsersErrorMessage: ''
        }
        
    }),

    on(authActions.getApprovedUsersSuccess, (state, { users }) => {
        return{
            ...state,
            approvedUsers: users,
            approvedUsersLoading: false
        }
       
    }),

    on(authActions.getApprovedUsersFailure, (state, { message }) => {

        return{
            ...state,
        approvedUsersErrorMessage: message,
        approvedUsersLoading: false
        }
        
    }),

    // Get Not Approved Users actions
    on(authActions.getNotApprovedUsers, (state) => {

        return{
            ...state,
        notApprovedUsersLoading: true,
        notApprovedUsersErrorMessage: ''
        }
        
    }),

    on(authActions.getNotApprovedUsersSuccess, (state, { users }) => {

        return{
            ...state,
        notApprovedUsers: users,
        notApprovedUsersLoading: false
        }
        
    }),

    on(authActions.getNotApprovedUsersFailure, (state, { message }) => {

        return{
            ...state,
        notApprovedUsersErrorMessage: message,
        notApprovedUsersLoading: false
        }
        
    }),

    // Approve User actions
    on(authActions.approveUser, (state) => {

        return{
            ...state,
        approveUserLoading: true,
        approveUserErrorMessage: ''
        }
        
    }),

    on(authActions.approveUserSuccess, (state) => {

        return{
            ...state,
        approveUserLoading: false
        }
        
    }),

    on(authActions.approveUserFailure, (state, { message }) => {

        return{
            ...state,
        approveUserErrorMessage: message,
        approveUserLoading: false
        }
        
    }),

    // Reject User actions
    on(authActions.rejectUser, (state) => {

        return{
            ...state,
        rejectUserLoading: true,
        rejectUserErrorMessage: ''
        }
        
    }),

    on(authActions.rejectUserSuccess, (state) => {

        return{
            ...state,
        rejectUserLoading: false
        }
        
    }),

    on(authActions.rejectUserFailure, (state, { message }) => {

        return{
            ...state,
        rejectUserErrorMessage: message,
        rejectUserLoading: false
        }
    
    })

)
