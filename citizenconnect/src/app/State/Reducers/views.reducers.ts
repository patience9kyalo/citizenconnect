import { createReducer, on } from "@ngrx/store";
import { viewsActions } from "../Actions/views.action";
import { Views } from "../../Models/views";

export interface ViewsInterface {
    view: Views[]
    viewError: string
    viewLoading: boolean

    //add the views

    addviewSuccessMessage: string
    addviewErrorMessage: string
    addviewLoading: boolean
  }
  
  export const initialState: ViewsInterface = {
    view: [],
    viewError: '',
    viewLoading: false,

    //add the views

    addviewSuccessMessage: '',
    addviewErrorMessage: '',
    addviewLoading: false
  };
  
  // Create a reducer function to handle actions
  export const viewsReducer = createReducer(

     initialState,

    on(viewsActions.add, (state) => {

        return {

            ...state,
            addviewErrorMessage: '',
            addviewLoading: true,
            addviewSuccessMessage: '',
        }
    }),

    on(viewsActions.addSuccess, (state, { response }) => {

        return {

            ...state,
            addviewErrorMessage: '',
            addviewLoading: false,
            addviewSuccessMessage: response.message,
        }
    }),

    on(viewsActions.addFailure, (state, { message }) => {

        return {

            ...state,
            addviewErrorMessage: message,
            addviewLoading: false,
            addviewSuccessMessage: '',
        }
    }),

    on(viewsActions.getViews, (state) => {

        return {

            ...state,
            views: [],
            viewLoading: false,
            viewError: '',
        }
    }),

    on(viewsActions.getViewsSuccess, (state, { views }) => {

        return {

            ...state,
            views: views,
            viewLoading: false,
            viewError: '',
        }
    }),

    on(viewsActions.getViewsFailure, (state, { message }) => {

        return {

            ...state,
            views: [],
            viewLoading: false,
            viewError: message,
        }
    }),

  );