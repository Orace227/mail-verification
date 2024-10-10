'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import ChangePasswordModal from './ChangePasswordModal';
const LinkAuthentication = () => {
  const router = useRouter();
  const { token } = useParams();
  const [showPasswordUpdateModal, setShowPasswordUpdateModal] = useState(false);
  const verifyLink = async () => {
    try {
      const response = await axios.get(`/password-reset-link/${token}/`);

      if (response.status === 200) {
        toast.success('Verification successful');
        setShowPasswordUpdateModal(true);
      }
    } catch (error) {
      toast.error('Error verifying link');
    }
  };

  return (
    <>
      {showPasswordUpdateModal && (
        <ChangePasswordModal
          open={showPasswordUpdateModal}
          handleClose={() => setShowPasswordUpdateModal(false)}
          email_token={token}
        />
      )}
      <div className="flex justify-center items-center h-screen bg-gradient-to-r">
        <div className="flex flex-col items-center justify-center text-center bg-opacity-80 p-8 rounded-lg">
          <img src={'/logos/logo.png'} className="w-[400px] mb-4" alt="Change Password" />
          <h1 className="text-4xl text-[#c8bea7] font-bold mt-4">Change Your Password</h1>
          <p className="mt-4 text-[#fff] text-[30px] leading-8">
            To enhance your account security, please update your password.
          </p>
          <p className="mt-4 text-[#fff] text-[30px] leading-8">
            Click the button below to proceed with the password change.
          </p>
          <div className="mt-8">
            <button
              onClick={verifyLink} // Ensure this function triggers the password change process
              className="bg-[#2A5934] text-[#ffffff] rounded-lg p-4 text-[30px] font-semibold transition duration-300 hover:bg-[#3C7B5B] hover:shadow-lg"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkAuthentication;
