import { useContext, createContext } from 'react';

const initialState = {
  isAuthenticated: false,
  userHasAuthenticated: (value: boolean) => {},
}

export const AppContext = createContext(initialState);

export function useAppContext() {
  return useContext(AppContext);
}