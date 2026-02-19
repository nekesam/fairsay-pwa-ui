//Bridge for the global state of the app, such as user progress and form access

import React, { createContext, useState,  useContext, useEffect } from 'react';
import { storageService } from '../services/storageServices';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //For the core user & session state
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(null);//For the notification/alert system
  const [loading, setLoading] = useState(true); //For handling initial loading state, such as checking for existing sessions or fetching user data on app start

  useEffect(() => {
    //Simulate checking for existing user session on app load
    const existingUser = storageService.getCurrentUser();
    if (existingUser) {
      setUser(existingUser);
    }
    setLoading(false);
  }, []);
  

//To sync user state with localStorage, ensuring that changes to the user object are persisted across sessions and page reloads. This allows the app to maintain the user's progress and session state effectively.
const login = (userData) => {
  setUser(userData);
 storageService.setCurrentUser(userData);
};

const logout = () => {
  setUser(null);
  storageService.logout();
};

//To update user fields after verification, such as email verification or employee verification. This allows the app to track the user's progress through the different stages of the complaint process and unlock features accordingly.
const updateUser = (updatedData) => {
  setUser(prev => {
    const updatedUser = { ...prev, ...updatedData };
    storageService.setCurrentUser(updatedUser);
    const allUsers = storageService.getUsers();
    const userIndex = allUsers.findIndex(u => u.email === updatedUser.email);
    if (userIndex !== -1) {
      allUsers[userIndex] = updatedUser;
      localStorage.setItem('fs_users', JSON.stringify(allUsers));
    }
    return updatedUser;
  });
};

  //To trigger and auto-dismiss alerts after 4 seconds
  const showAlert = (message, type= 'info') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 4000);
  };


 
  return (
    <AppContext.Provider value={{ user, setUser, login, logout, updateUser, loading, alert, showAlert }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);