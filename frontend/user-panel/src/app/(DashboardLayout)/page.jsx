'use client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// components
import CreditReport from '@/app/(DashboardLayout)/components/dashboard/CreditReport';
import ProductPerformances from '@/app/(DashboardLayout)/components/dashboard/ProductPerformances';
import WelcomeCard from './components/dashboard/WelcomeCard';
import PageContainer from './components/container/PageContainer';
import { useUserData } from '@/store/useUserData';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Dashboard() {
  const [subscription, setSubscription] = useState([]);
  const [creditUsageLog, setCreditUsageLog] = useState({});
  useUserData();
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
    const fetchCreditUsage = async () => {
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
    fetchCreditUsage();
  }, []);

  useEffect(() => {
    const fetchCreditUsage = async () => {
      const token = Cookies.get('access');

      const sub = await axios.get('/subscribe/credit-usage-logs/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (sub.status === 200) {
        setCreditUsageLog(sub.data);
      }
    };

    fetchCreditUsage();
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <WelcomeCard subscription={subscription} creditUsageLog={creditUsageLog} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <CreditReport subscription={subscription} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <ProductPerformances subscription={subscription} creditUsageLog={creditUsageLog} />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
