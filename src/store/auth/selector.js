export const usernameSelector = state => state.auth.username;

export const isLoadingSelector = state => state.auth.isLoading;

export const isAuthenticatedSelector = state => state.auth.isAuthenticated;

export const errorSelector = state => state.auth.error;
