import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ViewsInterface } from "../Reducers/views.reducers";

// Create a feature selector for the views state
export const selectViewsState = createFeatureSelector<ViewsInterface>('view');

// Selector to get all views from the state
export const selectAllViews = createSelector(selectViewsState,(state) => state.view);

// Selector to get the loading state
export const selectViewsLoading = createSelector(
  selectViewsState,
  (state) => state.viewLoading
);

// Selector to get error messages
export const selectViewsError = createSelector(
  selectViewsState,
  (state) => state.viewError
);

