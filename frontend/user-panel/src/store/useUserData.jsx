'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a context provider
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  console.log(userData);
  const router = useRouter();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get('/users/me');
        const user = data?.data?.User;
        localStorage.setItem('userData', JSON.stringify(user)); // Store in localStorage as a string
        setUserData(user);

        // If no user data, redirect to login
        // if (!user) {
        //   console.log('Redirecting to login...');
        //   router.push('/auth/login');
        // }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Redirect to login in case of an error (e.g., unauthorized)
        // router.push('/auth/login');
      }
    };

    fetchUserData();
  }, []);

  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
};

// Custom hook to consume the context
export const useUserData = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }

  return context;
};
