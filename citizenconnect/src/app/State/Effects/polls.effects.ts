import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PollsService } from "../../Services/polls.service";
import { pollQuestionsActions } from "../Actions/pollQuestions.actions";
import { catchError, concatMap, map, mergeMap, of } from "rxjs";

@Injectable()

export class PollEffects {

    constructor(private action$: Actions, private router: Router, private ps: PollsService) { }

    //handle the addition of incidents

    addPoll$ = createEffect(() => {

        return this.action$.pipe(

            //listen for the incident action

            ofType(pollQuestionsActions.addPollQuestion),

            // Handle the action by calling the IncidentService.reportIncident method

            mergeMap(({ question }) => this.ps.addPollQuestion(question).pipe(
                map(response => {

                    //on success add the incident and navigate to report page

                    this.router.navigate(['/home'])
                    return pollQuestionsActions.addPollQuestionSuccess({ response })
                }),

                // On failure, dispatch add Failure' action with the error message


                catchError(error => of(pollQuestionsActions.addPollQuestionFailure({ message: error.error.message })))
            ))
        )
    })

    //handle the getting of incidents

    loadPollQuestions$ = createEffect(() => {

        console.log('reaching here')

        return this.action$.pipe(
            ofType(pollQuestionsActions.getPollQuestions),
            concatMap(() => this.ps.getPollQuestions().pipe(
                map(response => {

                    console.log(response);
                    return pollQuestionsActions.getPollQuestionsSuccess({ question: response })
                }
                ),
                catchError((error) =>
                    of(pollQuestionsActions.getPollQuestionsFailure({ message: error.error.message })))
            ))
        )

    });

    addVote$ = createEffect(() => {

        return this.action$.pipe(
            ofType(pollQuestionsActions.addVote),
            mergeMap((action) =>
                this.ps.addVote(action.vote).pipe(
                    map(() => pollQuestionsActions.addVoteSuccess({ response: { message: 'Vote added successfully' } })),
                    catchError((error) =>
                        of(pollQuestionsActions.addVoteFailure({ message: error.message }))
                    )
                )
            )
        )

    });
}