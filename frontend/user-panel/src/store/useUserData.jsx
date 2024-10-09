'use client';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a context provider
export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const token = Cookies.get('access');
  console.log(userData);
  const router = useRouter();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(`/user/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(data[0]);

        // If no user data, redirect to login
        if (!data[0]) {
          console.log('Redirecting to login...');
          router.push('/auth/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Redirect to login in case of an error (e.g., unauthorized)
        // router.push('/auth/login');
      }
    };
    if (token) {
      fetchUserData();
    } else {
      router.push('/auth/login');
    }
  }, [token]);

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
