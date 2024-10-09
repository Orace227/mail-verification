'use client';
import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

import SupportIcon from '@mui/icons-material/Support';
import { EmailOutlined, KeyOutlined, PeopleAltOutlined } from '@mui/icons-material';
import axios from 'axios';
import Cookies from 'js-cookie';
export default function SubscriptionManagement() {
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [subscription, setSubscription] = useState([]);
  const [availablePlans, setAvailablePlans] = useState([]);

  const plans = [
    { name: 'free', price: '', emailValidations: '100 Email Validations / month' },
    { name: 'small', price: '$9.99 / month', emailValidations: '5,000 Email Validations / month' },
    {
      name: 'medium',
      price: '$34.99 / month',
      emailValidations: '25,000 Email Validations / month',
    },
    {
      name: 'large',
      price: '$94.99 / month',
      emailValidations: '100,000 Email Validations / month',
    },
  ];

  useEffect(() => {
    const fetchSubscription = async () => {
      const token = Cookies.get('access');

      const sub = await axios.get('/subscribe/subscriptions/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (sub.status === 200) {
        setSubscription(sub.data);
      }
    };
    fetchSubscription();
  }, []);

  useEffect(() => {
    const fetchAvailablePlans = async () => {
      const token = Cookies.get('access');

      const plans = await axios.get('/subscribe/subscription-plans/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (plans.status === 200) {
        setAvailablePlans(plans.data);
      }
    };
    fetchAvailablePlans();
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Your Subscription Card */}
      {subscription.length > 0 ? (
        <Card sx={{ backgroundColor: '#253662', boxShadow: 3, borderRadius: '10px' }}>
          <CardHeader
            title={
              <Typography variant="h6" fontWeight="bold">
                Your Subscription
              </Typography>
            }
            action={
              <Typography variant="subtitle1" fontWeight="bold">
                will renew on Oct 30, 2024
              </Typography>
            }
          />
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Plan Title and Price */}
              <div className="flex flex-col items-start space-y-2">
                <Typography variant="h6" fontWeight="bold" className="flex items-center space-x-2">
                  <EmailOutlined color="primary" />
                  <span>Free Plan</span>
                </Typography>
              </div>

              {/* Email Validations */}
              <div className="flex items-center space-x-2">
                <EmailOutlined color="primary" />
                <Typography variant="body2">100 Email Validations</Typography>
              </div>

              {/* API Key */}
              <div className="flex items-center space-x-2">
                <KeyOutlined color="primary" />
                <Typography variant="body2">1 API Key</Typography>
              </div>

              {/* Requests / Team Member */}
              <div className="flex items-center space-x-2">
                <PeopleAltOutlined color="primary" />
                <Typography variant="body2">10 Requests / Min</Typography>
              </div>

              {/* Team Members */}
              <div className="flex items-center space-x-2">
                <PeopleAltOutlined color="primary" />
                <Typography variant="body2">1 Team Member</Typography>
              </div>

              {/* Support */}
              <div className="flex items-center space-x-2">
                <SupportIcon color="primary" />
                <Typography variant="body2">Email Support</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ backgroundColor: '#253662', boxShadow: 3, borderRadius: '10px' }}>
          <CardHeader
            title={
              <Typography variant="h6" fontWeight="bold">
                Your Subscription
              </Typography>
            }
          />
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Plan Title and Price */}
              <div className="flex flex-col items-start space-y-2">
                <Typography variant="h6" fontWeight="bold" className="flex items-center space-x-2">
                  <EmailOutlined color="primary" />
                  <span>Free Plan</span>
                </Typography>
              </div>

              {/* Email Validations */}
              <div className="flex items-center space-x-2">
                <EmailOutlined color="primary" />
                <Typography variant="body2">100 Email Validations</Typography>
              </div>

              {/* API Key */}
              <div className="flex items-center space-x-2">
                <KeyOutlined color="primary" />
                <Typography variant="body2">1 API Key</Typography>
              </div>

              {/* Requests / Team Member */}
              <div className="flex items-center space-x-2">
                <PeopleAltOutlined color="primary" />
                <Typography variant="body2">10 Requests / Min</Typography>
              </div>

              {/* Team Members */}
              <div className="flex items-center space-x-2">
                <PeopleAltOutlined color="primary" />
                <Typography variant="body2">1 Team Member</Typography>
              </div>

              {/* Support */}
              <div className="flex items-center space-x-2">
                <SupportIcon color="primary" />
                <Typography variant="body2">Email Support</Typography>
              </div>
            </div>
            <Typography variant="subtitle2" className="pt-3">
              You are currently on the Free Plan. To access additional features, please consider
              selecting one of the other available plans.
            </Typography>
          </CardContent>
        </Card>
      )}
      {/* Available Plans Card */}
      <Card sx={{ backgroundColor: '#253662', boxShadow: 3, borderRadius: '10px' }}>
        <CardHeader
          title={
            <Typography variant="h6" fontWeight="bold">
              Available Plans
            </Typography>
          }
        />
        <CardContent>
          {availablePlans && availablePlans.length > 0 ? (
            <>
              <RadioGroup value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
                {availablePlans.map((plan) => (
                  <div key={plan.name} className="flex items-center space-x-4 space-y-4 py-2">
                    <FormControlLabel
                      value={plan.name}
                      control={<Radio />}
                      label={
                        <div className="flex justify-between w-full items-center">
                          <Typography variant="body1" fontWeight="bold">
                            {plan.name.charAt(0).toUpperCase() + plan.name.slice(1)}
                          </Typography>
                          <Typography variant="body1" fontWeight="bold">
                            {plan.price}
                          </Typography>
                        </div>
                      }
                    />
                    <div className="flex-grow text-right">
                      <Typography variant="body2" color="body2">
                        {plan.emailValidations}
                      </Typography>
                    </div>
                  </div>
                ))}
              </RadioGroup>
              <Button
                variant="contained"
                color="primary"
                className="mt-6 w-full sm:w-auto"
                sx={{
                  textTransform: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  boxShadow: '0 3px 6px rgba(0,0,0,0.1)',
                  '&:hover': { backgroundColor: '#1565c0' },
                }}
              >
                Save
              </Button>
              <Typography variant="body2" color="text.secondary" className="pt-2">
                All prices excl. VAT
              </Typography>
            </>
          ) : (
            <Typography variant="body2">No plans available.</Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
