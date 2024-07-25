import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { ViewsService } from "../../Services/views.service"
import { viewsActions } from "../Actions/views.action"
import { catchError, concatMap, map, mergeMap, of } from "rxjs"

@Injectable()

export class ViewEffects{

    constructor(private action$: Actions, private router: Router, private vs: ViewsService){}

    //handle the addition of views

    addView$ = createEffect(() => {

        return this.action$.pipe(

            //listen for the view action

            ofType(viewsActions.add),

            // Handle the action by calling the viewService.reportview method

            mergeMap(({views}) => this.vs.addViews(views).pipe(
                map(response => {

                    //on success add the view and navigate to report page

                    this.router.navigate(['/home'])
                    return viewsActions.addSuccess({response})
                }),

                // On failure, dispatch add Failure' action with the error message


                catchError(error => of(viewsActions.addFailure({message: error.error.message})))
            ))
        )
    })

    //handle the getting of views

    getViews$ = createEffect(() => {
        console.log('reaching here')
        return this.action$.pipe(
            ofType(viewsActions.getViews),
            concatMap(()=>this.vs.getViews().pipe(
                map(response=>{
                    console.log(response);
                    
                    return viewsActions.getViewsSuccess({views:response})
                }
            ),
            catchError(error=> of (viewsActions.getViewsFailure({message:error.error.message})))
            ))
        )
    })
}