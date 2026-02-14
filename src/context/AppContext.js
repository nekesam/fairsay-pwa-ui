//Bridge for the global state of the app, such as user progress and form access

import React, { createContext, useState,  useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // For the core user & session state
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(null);// For the notification/alert system

  //To trigger and auto-dismiss alerts after 4 seconds
  const showAlert = (message, type= 'info') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 4000);
  };


 
  return (
    <AppContext.Provider value={{ user, setUser, alert, showAlert }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);