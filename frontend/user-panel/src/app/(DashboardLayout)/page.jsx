'use client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// components
import CreditReport from '@/app/(DashboardLayout)/components/dashboard/CreditReport';
import ProductPerformances from '@/app/(DashboardLayout)/components/dashboard/ProductPerformances';
import WelcomeCard from './components/dashboard/WelcomeCard';
import PageContainer from './components/container/PageContainer';

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <WelcomeCard />
          </Grid>
          <Grid item xs={12} lg={12}>
            <CreditReport />
          </Grid>
          <Grid item xs={12} lg={12}>
            <ProductPerformances />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
