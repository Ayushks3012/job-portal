import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { User, Mail, Lock, Upload, Eye, EyeOff, UserCheck, Building2, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const SignUp = () => {

  const [formData, setFormData] = useState({
    fullName:"",
    email:"",
    password:"",
    role:"",
    avatar:null,
  });

  const [formState, setFormState] = useState({
    loading: false,
    errors: {},
    showPassword: false,
    avatarPreview: null,
    success: false,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user start typing
    if(formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: {...prev.errors, [name] : '' }
      }));
    }
  };

  const handleRoleChange = (role) => {

  };

  const handleAvatarChange = (e) => {

  };

  const validateForm = () => {

  };

  const handleSubmit = async (e) => {

  };

  if(formState.success) {
      return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
          <motion.div
          initial={{ opacity:0, scale: 0.9}}
          animate={{ opacity:1, scale: 1}}
          className='bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center'
          >
            <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
            <h2 className='text-2xl font-bold text-gray-900 mb-2'>Account Created!</h2>
            <p className='text-gray-600 mb-4'>
              Welcome to jobPortal! Your account has been successfully created.
            </p>
            <div className='animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto'></div>
            <p className='text-sm text-gray-500 mt-2'>Redirecting to your dashboard...</p>
          </motion.div>
        </div>
      );
    }

  return (
    <div className=''>
      <motion.div 
      initial={{opacity: 0, y: 20}}
      animate={{ opacity:1, y: 0 }}
      transition={{duration: 0.6 }}
      className=""
      >
        <div className="">
          <h2 className="">
            Create Account
          </h2>
          <p className="">
            Join thousands of professionals their dream jobs
          </p>
          </div>

          <form className="" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className=''>
                Full Name *
              </label>
              <div className=''>

              </div>
            </div>

      </motion.div>
    </div>
  )
}

export default SignUp