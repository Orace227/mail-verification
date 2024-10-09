'use client';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import {
  CircularProgress,
  Stack,
  Box,
  Button,
  Grid,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
} from '@mui/material';

import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import Cookies from 'js-cookie';

const ProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const [countryCodes, setCountryCodes] = useState({});
  const router = useRouter();

  const validationSchema = yup.object({
    company_name: yup.string().required('Company Name is required'),
    website: yup.string().url('Enter a valid URL').required('Website is required'),
    gender: yup.string().required('Gender is required'),
    country: yup.string().required('Country is required'),
    phone_number: yup.string().required('Phone Number is required'),
  });

  const formik = useFormik({
    initialValues: {
      company_name: '',
      website: '',
      gender: 'male',
      country: '',
      phone_number: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const token = Cookies.get('access');
      try {
        const response = await axios.post('http://localhost:8000/api/v1/user/profile/', values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 201) {
          toast.success('Profile updated successfully!');
          Cookies.set('userId', response.data.id);
          router.push('/');
        }
      } catch (error) {
        toast.error('Error updating profile.');
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/user/country-codes/');
        setCountryCodes(response.data);
      } catch (error) {
        console.error('Error fetching country codes:', error);
      }
    };

    fetchCountryCodes();
  }, []);

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    formik.setFieldValue('country', selectedCountry);
    // console.log(countryCodes);
    // Check if the selected country exists in the country codes
    const countryData = Object.values(countryCodes).find(
      (country) => country.name.toLowerCase() === selectedCountry.toLowerCase(),
    );

    console.log(countryData);
    if (countryData) {
      const phoneCode = countryData.phone_code;
      formik.setFieldValue('phone_number', `${phoneCode} `); // Set the phone number field with the country code
    } else {
      formik.setFieldValue('phone_number', ''); // Clear the phone number if no country matches
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-xl mx-auto p-4 shadow-xl bg-[#1C455D] rounded-lg ">
        <Toaster />
        <h2 className="text-2xl font-bold text-center mb-4">Complete Your Profile</h2>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomFormLabel htmlFor="company_name">Company Name</CustomFormLabel>
              <CustomTextField
                fullWidth
                id="company_name"
                name="company_name"
                value={formik.values.company_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.company_name && Boolean(formik.errors.company_name)}
                helperText={formik.touched.company_name && formik.errors.company_name}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomFormLabel htmlFor="website">Website</CustomFormLabel>
              <CustomTextField
                fullWidth
                id="website"
                name="website"
                type="url"
                value={formik.values.website}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.website && Boolean(formik.errors.website)}
                helperText={formik.touched.website && formik.errors.website}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box>
                <CustomFormLabel>Gender</CustomFormLabel>
                <FormControl error={formik.touched.gender && Boolean(formik.errors.gender)}>
                  <RadioGroup
                    row
                    aria-labelledby="gender-label"
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </RadioGroup>
                  {formik.touched.gender && formik.errors.gender && (
                    <p className="text-red-500">{formik.errors.gender}</p>
                  )}
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomFormLabel htmlFor="country">Country</CustomFormLabel>
              <CustomTextField
                fullWidth
                id="country"
                name="country"
                value={formik.values.country}
                onChange={handleCountryChange} // Use the new handler
                onBlur={formik.handleBlur}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <CustomFormLabel htmlFor="phone_number">Phone Number</CustomFormLabel>
              <CustomTextField
                fullWidth
                id="phone_number"
                name="phone_number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
                helperText={formik.touched.phone_number && formik.errors.phone_number}
              />
            </Grid>
          </Grid>

          <Box>
            <Button
              sx={{ marginTop: '20px' }}
              variant="contained"
              type="submit"
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : null}
            >
              {loading ? 'Updating...' : 'Update Profile'}
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
