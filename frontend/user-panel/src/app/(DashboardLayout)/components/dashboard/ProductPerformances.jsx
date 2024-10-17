'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../shared/DashboardCard';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
} from '@mui/material';

const ProductPerformances = ({ creditUsageLog }) => {
  // chart color
  const getStatusColors = (status, theme) => {
    switch (status) {
      case 'failed':
        return { bgcolor: theme.palette.error.light, color: theme.palette.error.main }; // Use theme's error color
      case 'deliverable & excellent':
        return { bgcolor: theme.palette.success.light, color: theme.palette.success.main }; // Use theme's success color
      case 'undeliverable':
        return { bgcolor: theme.palette.warning.light, color: theme.palette.warning.main }; // Use theme's warning color
      case 'unknown':
        return { bgcolor: theme.palette.primary.light, color: theme.palette.primary.main }; // Use theme's grey color
      default:
        return { bgcolor: theme.palette.grey[400], color: theme.palette.common.black }; // Default for undefined statuses
    }
  };

  const ProductChip = ({ status }) => {
    const theme = useTheme(); // Access theme
    const { bgcolor, color } = getStatusColors(status, theme); // Pass theme to getStatusColors

    return (
      <Chip
        sx={{
          bgcolor: bgcolor, // Set background color
          color: color, // Set text color
          borderRadius: '6px',
          width: 150,
        }}
        size="medium"
        label={status} // Show status as label
      />
    );
  };

  // Map over the creditUsageLog.searched_data array
  const products =
    creditUsageLog?.searched_data?.map((data, index) => ({
      id: data.id,
      email: data.result.result.inbound, // Assuming inbound is the email
      date: new Date(data.created_at).toLocaleDateString(), // Format the date
      status: data.result.result.validations.safe_to_send, // Using safe_to_send as status
    })) || [];

  return (
    <DashboardCard title="Past Entries">
      <TableContainer>
        <Table
          aria-label="Past Entries"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Typography variant="subtitle2" fontWeight={600}>
                  Email
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Status
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell sx={{ pl: 0 }}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {product.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {product.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <ProductChip key={product.id} status={product.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardCard>
  );
};

export default ProductPerformances;
