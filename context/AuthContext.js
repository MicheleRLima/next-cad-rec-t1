import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../src/services/firebaseConfig';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (info) => {
    console.log('Context: ', info);
    setLoading(false);
    setIsLoggedIn(true);
    getUserData();
  };

  const login = async (info) => {
    console.log('Context: ', info);
    setLoading(false);
    setIsLoggedIn(true);
  };

  const value = {
    currentUser,
    signup,
    login,
    isLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
