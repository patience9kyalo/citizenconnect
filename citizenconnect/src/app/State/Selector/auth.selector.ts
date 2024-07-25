import { createFeatureSelector, createSelector } from "@ngrx/store"
import { authInterface } from "../Reducers/auth.reducers"

// Feature Selector
const authSelectorFeature = createFeatureSelector<authInterface>('auth');

// Login Selectors
export const loginErrorSelector = createSelector(
  authSelectorFeature,
  (state) => state.loginErrorMessage
);

export const loginSuccessSelector = createSelector(
  authSelectorFeature,
  (state) => state.loginSuccessMessage
);

export const loginLoadingSelector = createSelector(
  authSelectorFeature,
  (state) => state.loginLoading
);

// Register Selectors
export const registerErrorSelector = createSelector(
  authSelectorFeature,
  (state) => state.registerErrorMessage
);

export const registerSuccessSelector = createSelector(
  authSelectorFeature,
  (state) => state.registerSuccessMessage
);

export const registerLoadingSelector = createSelector(
  authSelectorFeature,
  (state) => state.registerLoading
);

// Users Selectors
export const usersSelector = createSelector(
  authSelectorFeature,
  (state) => state.users
);

export const usersLoadingSelector = createSelector(
  authSelectorFeature,
  (state) => state.usersLoading
);

export const usersErrorSelector = createSelector(
  authSelectorFeature,
  (state) => state.usersErrorMessage
);

// Approved Users Selectors
export const approvedUsersSelector = createSelector(
  authSelectorFeature,
  (state) => state.approvedUsers
);

export const approvedUsersLoadingSelector = createSelector(
  authSelectorFeature,
  (state) => state.approvedUsersLoading
);

export const approvedUsersErrorSelector = createSelector(
  authSelectorFeature,
  (state) => state.approvedUsersErrorMessage
);

// Not Approved Users Selectors
export const notApprovedUsersSelector = createSelector(
  authSelectorFeature,
  (state) => state.notApprovedUsers
);

export const notApprovedUsersLoadingSelector = createSelector(
  authSelectorFeature,
  (state) => state.notApprovedUsersLoading
);

export const notApprovedUsersErrorSelector = createSelector(
  authSelectorFeature,
  (state) => state.notApprovedUsersErrorMessage
);

// Approve User Selectors
export const approveUserLoadingSelector = createSelector(
  authSelectorFeature,
  (state) => state.approveUserLoading
);

export const approveUserErrorSelector = createSelector(
  authSelectorFeature,
  (state) => state.approveUserErrorMessage
);

// Reject User Selectors
export const rejectUserLoadingSelector = createSelector(
  authSelectorFeature,
  (state) => state.rejectUserLoading
);

export const rejectUserErrorSelector = createSelector(
  authSelectorFeature,
  (state) => state.rejectUserErrorMessage
);

// Update User Selectors
export const updateUserLoadingSelector = createSelector(
  authSelectorFeature,
  (state) => state.updateUserLoading
);

export const updateUserSuccessSelector = createSelector(
  authSelectorFeature,
  (state) => state.updateUserSuccessMessage
);

export const updateUserErrorSelector = createSelector(
  authSelectorFeature,
  (state) => state.updateUserErrorMessage
);

// Delete User Selectors
export const deleteUserLoadingSelector = createSelector(
  authSelectorFeature,
  (state) => state.deleteUserLoading
);

export const deleteUserSuccessSelector = createSelector(
  authSelectorFeature,
  (state) => state.deleteUserSuccessMessage
);

export const deleteUserErrorSelector = createSelector(
  authSelectorFeature,
  (state) => state.deleteUserErrorMessage
);

