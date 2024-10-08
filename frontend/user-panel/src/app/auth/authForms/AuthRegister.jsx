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
import { Grid, IconButton, InputAdornment } from '@mui/material';
import { Api, Visibility, VisibilityOff } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';

import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import { useRouter } from 'next/navigation';
import { useUserData } from '@/store/useUserData';

// import { encryptData } from "@/utils/encryption/encryption";

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

  // get user's ip address
  async function getUserIpDetails() {
    try {
      const response = await fetch(`https://ipinfo.io?token=${process.env.NEXT_PUBLIC_API_TOKEN}`);
      const data = await response.json();

      console.log("User's IP Address:", data?.ip);
      console.log('Location:', `${data?.city}, ${data?.region}, ${data?.country}`);
      console.log('Timezone:', data.timezone);
      return data; // Return the data if you need to use it elsewhere
    } catch (error) {
      console.error('Error fetching IP details:', error);
    }
  }

  const handleSubmit = async (values) => {
    try {
      console.log(values);
      const res = await axios.post('/register', values);
      console.log(res);
      if (res.status === 201) {
        // Set the token in cookies
        toast.success(res.data.detail, {
          icon: '🚀',
        });
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(`Sorry!! Your email  already exist!!`);
      } else {
        toast.error(`Sorry!! You can not successfully signed up!!`);
      }
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

      {/* <Box> */}
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
          {/* <Stack direction="row"> */}
          <Button variant="contained" type="submit">
            Sign up
          </Button>
          {/* </Stack> */}
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

      {/* </Box> */}
      {subtitle}
    </>
  );
};

export default AuthRegister;
