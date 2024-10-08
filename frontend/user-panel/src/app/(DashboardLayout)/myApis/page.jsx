'use client';
import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../components/shared/DashboardCard';
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
  Button,
} from '@mui/material';

const Page = () => {
  // chart color
  const getStatusColors = (keyType, theme) => {
    switch (keyType) {
      case 'Live':
        return { bgcolor: theme.palette.success.light, color: theme.palette.success.main }; // Use theme's success color
      case 'Development':
        return { bgcolor: theme.palette.warning.light, color: theme.palette.warning.main }; // Use theme's warning color
      default:
        return { bgcolor: theme.palette.grey[400], color: theme.palette.common.black }; // Default for undefined statuses
    }
  };
  const ProductChip = ({ apiKey }) => {
    const theme = useTheme(); // Access theme
    const { bgcolor, color } = getStatusColors(apiKey.keyType, theme); // Pass theme to getStatusColors

    return (
      <Chip
        sx={{
          bgcolor: bgcolor, // Set background color
          color: color, // Set text color
          borderRadius: '6px',
          width: 150,
        }}
        size="medium"
        label={apiKey.keyType} // Show status as label
      />
    );
  };
  // apiKey data
  const apiKeys = [
    {
      id: '1',
      name: 'sub_A55xxx',
      key: 'key_live_vdGgfEhgFZBLXpJJxFcrgevdGgfEhgFZBLXpJJxFcrgevdGgfEhgFZBLXpJJxFcrge',
      date: '03/11/2020',
      keyType: 'Live',
    },
    {
      id: '2',
      name: 'sub_B55xxx',
      key: 'key_live_vdGgfEhgFZBLXpJJxFcrgevdGgfEhgFZBLXpJJxFcrgevdGgfEhgFZBLXpJJxFcrge',
      date: '04/11/2020',
      keyType: 'Development',
    },
    {
      id: '3',
      name: 'sub_C55xxx',
      key: 'key_live_vdGgfEhgFZBLXpJJxFcrgevdGgfEhgFZBLXpJJxFcrgevdGgfEhgFZBLXpJJxFcrge',
      date: '02/12/2020',

      keyType: 'Development',
    },
    {
      id: '4',
      name: 'sub_D55xxx',
      key: 'key_live_vdGgfEhgFZBLXpJJxFcrgevdGgfEhgFZBLXpJJxFcrgevdGgfEhgFZBLXpJJxFcrge',
      date: '05/02/2021',

      keyType: 'Development',
    },
    {
      id: '5',
      name: 'sub_E55xxx',
      key: 'key_live_vdGgfEhgFZBLXpJJxFcrgevdGgfEhgFZBLXpJJxFcrgevdGgfEhgFZBLXpJJxFcrge',
      date: '27/03/2021',

      keyType: 'Development',
    },
  ];
  return (
    <DashboardCard title="My APIs" action={<Button variant="contained">Create API</Button>}>
      <TableContainer>
        <Table
          aria-label="My APIs"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 0 }}>
                <Typography variant="subtitle2" fontWeight={600}>
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  API Key
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Created Date
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
            {apiKeys.map((key) => (
              <TableRow key={key.id}>
                <TableCell sx={{ pl: 0 }}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {key.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" className="" fontWeight={600}>
                    {key.key}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {key.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <ProductChip key={key.id} apiKey={key} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardCard>
  );
};

export default Page;
