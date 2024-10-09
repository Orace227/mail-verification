'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import DashboardCard from '../components/shared/DashboardCard';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Button,
} from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment-timezone';

const Page = () => {
  const [apiKeys, setApiKeys] = useState([]);

  useEffect(() => {
    const fetchApiKeys = async () => {
      const token = Cookies.get('access');
      try {
        const res = await axios.get('/key/generate-api-key/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) {
          console.log(res.data);
          setApiKeys(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiKeys();
  }, []);
  const generateApiKey = async () => {
    const token = Cookies.get('access');
    const res = await axios.post(
      '/key/generate-api-key/',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setApiKeys(res.data);
  };

  return (
    <DashboardCard
      title="My APIs"
      action={
        <Button variant="contained" onClick={generateApiKey} disabled={apiKeys.length > 0}>
          Create API
        </Button>
      }
    >
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
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Access Key
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Secret Key
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Created Date
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apiKeys.map((key) => (
              <TableRow key={key.id}>
                <TableCell sx={{ pl: 0 }}>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {key.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" className="" fontWeight={600}>
                    {key.access_key}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" className="" fontWeight={600}>
                    {key.secret_key}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {moment(key.created_at).tz('Asia/Kolkata').format('MMMM D, YYYY')}
                  </Typography>
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
