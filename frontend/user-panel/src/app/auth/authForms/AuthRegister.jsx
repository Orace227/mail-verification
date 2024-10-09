import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import AuthSocialButtons from './AuthSocialButtons';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { Grid, IconButton, InputAdornment, CircularProgress } from '@mui/material';
import { Api, Visibility, VisibilityOff } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';

import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import { useRouter } from 'next/navigation';
import { useUserData } from '@/store/useUserData';

const AuthRegister = ({ title, subtitle, subtext }) => {
  const router = useRouter();

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const { setUserData } = useUserData();

  const validationSchema = yup.object({
    first_name: yup.string().required('First Name is required'),
    last_name: yup.string().required('Last Name is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .matches(/\d/, 'Password must contain at least one number') // Enforces at least one number
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter') // Enforces at least one uppercase letter
      .required('Password is required'),
    confirm_password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .matches(/\d/, 'Password must contain at least one number') // Enforces at least one number
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter') // Enforces at least one uppercase letter
      .required('Password is required'),
  });

  const handleSubmit = async (values) => {
    setLoading(true); // Start the loader
    try {
      console.log(values);
      const res = await axios.post('/register/', values);
      console.log(res);
      if (res.status === 201) {
        toast.success(res.data.detail, {
          icon: '🚀',
        });
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(`Sorry!! Your email already exists!!`);
      } else {
        toast.error(`Sorry!! You couldn't sign up successfully!!`);
      }
    } finally {
      setLoading(false); // Stop the loader
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <form onSubmit={formik.handleSubmit}>
        <Stack>
          <Grid container spacing={2} sx={{ mt: '-10px' }}>
            <Grid item xs={12} sm={6}>
              <CustomFormLabel>First Name</CustomFormLabel>
              <CustomTextField
                fullWidth
                id="first_name"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomFormLabel>Last Name</CustomFormLabel>
              <CustomTextField
                fullWidth
                id="last_name"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </Grid>
          </Grid>

          <Box mt="-10px">
            <CustomFormLabel>Email Address</CustomFormLabel>
            <CustomTextField
              fullWidth
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>

          <Box mt="-10px">
            <CustomFormLabel>Password</CustomFormLabel>
            <CustomTextField
              fullWidth
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box mb={3}>
            <CustomFormLabel>Re-Password</CustomFormLabel>
            <CustomTextField
              fullWidth
              id="confirm_password"
              name="confirm_password"
              type={showPassword1 ? 'text' : 'password'}
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
              helperText={formik.touched.confirm_password && formik.errors.confirm_password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      edge="end"
                    >
                      {showPassword1 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button
            variant="contained"
            type="submit"
            disabled={loading} // Disable the button during loading
          >
            {loading ? <CircularProgress size={24} /> : 'Sign up'} {/* Show loader when loading */}
          </Button>
        </Stack>
      </form>

      <Box mt={3}>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            or sign up with
          </Typography>
        </Divider>
      </Box>
      <AuthSocialButtons title="Sign up with" />

      {subtitle}
    </>
  );
};

export default AuthRegister;
