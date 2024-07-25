import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../Services/auth.service";
import { authActions } from "../Actions/auth.actions";
import { catchError, concatMap, exhaustMap, map, mergeMap, of } from "rxjs";
import { Router } from "@angular/router";
import { AuthstatusService } from "../../Services/authstatus.service";

@Injectable()
export class AuthEffects {

  constructor(private action$: Actions, private router: Router, private as: AuthService, private auth: AuthstatusService) { }

  // Effect to handle user registration
  registerUser$ = createEffect(() => {
    console.log('hapa')
    return this.action$.pipe(
      ofType(authActions.register),

      concatMap(req => this.as.registerUser(req.user).pipe(
        map(res => {
          this.router.navigate(['/login'])
          return authActions.registerSuccess({ response: res })
        }),
        catchError(error => of(authActions.registerFailure({ Message: error })))
      ))
    )

  })

  // Effect to handle user login

  loginUser$ = createEffect(() => {

    return this.action$.pipe(

      // Listen for the 'login' action

      ofType(authActions.login),

      // Handle the action by calling the AuthService.loginUser method

      exhaustMap(({ user }) => this.as.loginUser(user).pipe(

        // On success, set role and payload in localStorage and navigate based on role


        map(res => {
          localStorage.setItem('token', res.token)
          localStorage.setItem('Role', res.payload.Role);
          localStorage.setItem('Payload', JSON.stringify(res.payload));

          // this.toastr.success('Login Successful', 'Welcome')

          // Navigate to appropriate route based on role

          if (res.Role === 'admin') {
            console.log("User is an admin");
            this.router.navigate(['/adminhome']).then(() => {
              window.location.reload();
            });
          } else if (res.Role === 'gvn') {
            console.log("User is an official");
            this.router.navigate(['/home']).then(() => {
              window.location.reload();
            });
          } else {
            console.log("User is a citizen");
            this.router.navigate(['/home']).then(() => {
              window.location.reload();
            });
          }



          return authActions.loginSuccess({ response: res });
        }),



        // On failure, dispatch 'loginFailure' action with the error message

        catchError(error => of(authActions.loginFailure({ message: error.message })))
      ))
    );
  });


  // Effect to get all users
  getUsers$ = createEffect(() => {

    return this.action$.pipe(
      ofType(authActions.getUsers),
      concatMap(() => this.as.getUsers().pipe(
        map(response => {
          return authActions.getUsersSuccess({ user: response })

        }),
        catchError((error) => of(authActions.getUsersFailure({ message: error.message })))
      ))
    )
  })


  // Effect to get approved users
  getApprovedUsers$ = createEffect(() => {

    return this.action$.pipe(

      ofType(authActions.getApprovedUsers),
      concatMap(() => this.as.getApprovedUsers().pipe(
        map(response => {
          return authActions.getApprovedUsersSuccess({ users: response })
        }),
        catchError((error) => of(authActions.getApprovedUsersFailure({ message: error.message })))
      ))
    )
  })

  // Effect to get not approved users
  getNotApprovedUsers$ = createEffect(() => {
    return this.action$.pipe(
      ofType(authActions.getNotApprovedUsers),
      concatMap(() => this.as.getNotApprovedUsers().pipe(
        map(response => {
          return authActions.getNotApprovedUsersSuccess({ users: response })
        }),
        catchError((error) => of(authActions.getNotApprovedUsersFailure({ message: error.message })))
      ))
    )
  });

  // Effect to approve a user
  approveUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(authActions.approveUser),
      concatMap(({ Id }) => this.as.approveUser(Id).pipe(
        map(response => {
          return authActions.approveUserSuccess({Id});
        }),
        catchError((error) => of(authActions.approveUserFailure({ message: error.message })))
      ))
    );
  });

  // Effect to reject a user
  rejectUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(authActions.rejectUser),
      concatMap(({ Id }) => this.as.rejectUser(Id).pipe(
        map(() => {
          return authActions.rejectUserSuccess({ Id });
        }),
        catchError((error) => of(authActions.rejectUserFailure({ message: error.message })))
      ))
    );
  });

}
