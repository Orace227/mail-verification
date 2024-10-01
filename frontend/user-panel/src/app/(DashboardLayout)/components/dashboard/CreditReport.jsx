'use client';
import dynamic from 'next/dynamic';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import 'dayjs/locale/en-in'; // Import Indian locale for dayjs

import { Box, MenuItem, Select, FormControl, InputLabel, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import CustomTextField from '../forms/theme-elements/CustomTextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import isBetween from 'dayjs/plugin/isBetween'; // Import the plugin

dayjs.extend(isBetween); // Extend dayjs with the isBetween plugin
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CreditReport = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [filter, setFilter] = React.useState('yearly');
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const data = {
    yearly: {
      categories: [
        '01/01/2024',
        '01/02/2024',
        '01/03/2024',
        '01/04/2024',
        '01/05/2024',
        '01/06/2024',
        '01/07/2024',
        '01/08/2024',
        '01/09/2024',
        '01/10/2024',
        '01/11/2024',
        '01/12/2024',
      ],
      seriesData: [10, 30, 20, 50, 40, 60, 70, 90, 80, 100, 110, 120],
    },
    monthly: {
      categories: [
        '10/01/2024',
        '10/02/2024',
        '10/03/2024',
        '10/04/2024',
        '10/05/2024',
        '10/06/2024',
        '10/07/2024',
        '10/08/2024',
        '10/09/2024',
        '10/10/2024',
      ],
      seriesData: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
    },
    custom: {
      categories: [
        '09/01/2024',
        '09/05/2024',
        '09/10/2024',
        '09/15/2024',
        '09/20/2024',
        '09/25/2024',
        '09/30/2024',
      ],
      seriesData: [5, 15, 25, 35, 45, 55, 65],
    },
  };
  const filterCustomData = () => {
    const selectedData = data[filter];
    const filteredCategories = [];
    const filteredSeriesData = [];

    const start = dayjs(startDate);
    const end = dayjs(endDate);

    // Loop through the categories and check if they fall within the selected range
    selectedData.categories.forEach((category, index) => {
      const categoryDate = dayjs(category, 'MM/DD/YYYY'); // Ensure proper parsing
      console.log(categoryDate);
      // Use isBetween with correct parameters
      if (categoryDate?.isBetween(start, end, null, '[]')) {
        filteredCategories.push(category);
        filteredSeriesData.push(selectedData.seriesData[index]);
      }
    });

    return { filteredCategories, filteredSeriesData };
  };

  const optionsgredientchart = {
    chart: {
      height: 350,
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: { show: false },
    },
    stroke: { width: 7, curve: 'smooth' },
    xaxis: {
      type: 'datetime',
      categories:
        filter === 'custom' ? filterCustomData().filteredCategories : data[filter].categories,
      labels: { rotate: -45, trim: true },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [primary],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    markers: { size: 4, opacity: 0.9, colors: [primary], strokeColor: '#fff', strokeWidth: 2 },
    yaxis: { min: 0, max: 150 },
    tooltip: { theme: 'dark' },
    grid: { show: false },
  };

  const seriesgredientchart = [
    {
      name: 'Likes',
      data: filter === 'custom' ? filterCustomData().filteredSeriesData : data[filter].seriesData,
    },
  ];

  const handleFilterChange = (event) => setFilter(event.target.value);

  return (
    <div className="">
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'space-between' }}>
        <Typography mt={2} variant="h6" fontWeight={600}>
          Credit usage report
        </Typography>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel id="filter-select-label">Filter</InputLabel>
          <Select
            labelId="filter-select-label"
            value={filter}
            onChange={handleFilterChange}
            label="Filter"
          >
            <MenuItem value="yearly">Yearly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="custom">Custom</MenuItem>
          </Select>

          {filter === 'custom' && (
            <Box sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="Start Date"
                  views={['year', 'month', 'day']}
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  renderInput={(inputProps) => (
                    <CustomTextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      inputProps={{ 'aria-label': 'basic date picker' }}
                      {...inputProps}
                    />
                  )}
                />
                <MobileDatePicker
                  label="End Date"
                  views={['year', 'month', 'day']}
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  renderInput={(inputProps) => (
                    <CustomTextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      inputProps={{ 'aria-label': 'basic date picker' }}
                      {...inputProps}
                    />
                  )}
                />
              </LocalizationProvider>
            </Box>
          )}
        </FormControl>
      </Box>

      <div className="w-full mx-auto">
        <Chart
          options={optionsgredientchart}
          series={seriesgredientchart}
          type="line"
          height="300px"
          width="98%"
        />
      </div>
    </div>
  );
};

export default CreditReport;
