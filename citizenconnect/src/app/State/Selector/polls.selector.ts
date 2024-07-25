import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PollInterface } from "../Reducers/polls.reducers";

export const selectPollState = createFeatureSelector<PollInterface>('poll');

export const selectPollQuestions = createSelector(
  selectPollState,
  (state) => state.poll
);

export const selectPollVotes = createSelector(
  selectPollState,
  (state) => state.votes
);

export const selectLoading = createSelector(
  selectPollState,
  (state) => state.pollLoading
);

export const selectError = createSelector(
  selectPollState,
  (state) => state.pollError
);