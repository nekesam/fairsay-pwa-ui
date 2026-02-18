//Bridge for the global state of the app, such as user progress and form access

import React, { createContext, useState,  useContext, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //For the core user & session state
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(null);//For the notification/alert system
  const [loading, setLoading] = useState(true); //For handling initial loading state, such as checking for existing sessions or fetching user data on app start

  useEffect(() => {
    //Simulate checking for existing user session on app load
    const existingUser = localStorage.getItem('fs_users');
    if (existingUser) {
      setUser(JSON.parse(existingUser));
    }
    setLoading(false);
  }, []);
  

//To sync user state with localStorage, ensuring that changes to the user object are persisted across sessions and page reloads. This allows the app to maintain the user's progress and session state effectively.
const login = (userData) => {
  setUser(userData);
  localStorage.setItem('fs_users', JSON.stringify(userData));
};

const logout = () => {
  setUser(null);
  localStorage.removeItem('fs_users');
};

//To update user fields after verification, such as email verification or employee verification. This allows the app to track the user's progress through the different stages of the complaint process and unlock features accordingly.
const updateUser = (updatedData) => {
  setUser(prev => {
    const updatedUser = { ...prev, ...updatedData };
    localStorage.setItem('fs_users', JSON.stringify(updatedUser));
    return updatedUser;
  });
};

  //To trigger and auto-dismiss alerts after 4 seconds
  const showAlert = (message, type= 'info') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 4000);
  };


 
  return (
    <AppContext.Provider value={{ user, login, logout, updateUser, loading, alert, showAlert }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);