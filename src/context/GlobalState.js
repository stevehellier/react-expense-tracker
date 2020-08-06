import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Flowers', amount: -19.99 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -9.99 },
    { id: 4, text: 'Rent', amount: -150 },
    { id: 5, text: 'Food', amount: -57.55 },
  ],
};

// Create conext
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
