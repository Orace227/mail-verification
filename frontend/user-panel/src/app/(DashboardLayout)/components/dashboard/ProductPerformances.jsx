'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../shared/DashboardCard';
import CustomSelect from '../forms/theme-elements/CustomSelect';
import {
  MenuItem,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  TableContainer,
  Stack,
} from '@mui/material';

const ProductPerformances = () => {
  // chart color
  const getStatusColors = (status, theme) => {
    switch (status) {
      case 'failed':
        return { bgcolor: theme.palette.error.light, color: theme.palette.error.main }; // Use theme's error color
      case 'deliverable':
        return { bgcolor: theme.palette.success.light, color: theme.palette.success.main }; // Use theme's success color
      case 'undeliverable':
        return { bgcolor: theme.palette.warning.light, color: theme.palette.warning.main }; // Use theme's warning color
      case 'unknown':
        return { bgcolor: theme.palette.primary.light, color: theme.palette.primary.main }; // Use theme's grey color
      default:
        return { bgcolor: theme.palette.grey[400], color: theme.palette.common.black }; // Default for undefined statuses
    }
  };
  const ProductChip = ({ product }) => {
    const theme = useTheme(); // Access theme
    const { bgcolor, color } = getStatusColors(product.status, theme); // Pass theme to getStatusColors

    return (
      <Chip
        sx={{
          bgcolor: bgcolor, // Set background color
          color: color, // Set text color
          borderRadius: '6px',
          width: 150,
        }}
        size="medium"
        label={product.status} // Show status as label
      />
    );
  };
  // Product data
  const products = [
    {
      id: 1,
      email: 'Brown@gmail.com', // Updated email
      date: '2024-10-01', // Updated date
      status: 'failed',
    },
    {
      id: 2,
      email: 'Stylish@gmail.com', // Updated email
      date: '2024-09-30', // Updated date
      status: 'deliverable',
    },
    {
      id: 3,
      email: 'Eco-Friendly@gmail.com', // Updated email
      date: '2024-10-02', // Updated date
      status: 'unknown',
    },
    {
      id: 4,
      email: 'Canvas Backpack@gmail.com', // Updated email
      date: '2024-10-03', // Updated date
      status: 'undeliverable',
    },
  ];

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
                  <Typography  variant="subtitle2" fontWeight={600}>
                    {product.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <ProductChip key={product.id} product={product} />
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
