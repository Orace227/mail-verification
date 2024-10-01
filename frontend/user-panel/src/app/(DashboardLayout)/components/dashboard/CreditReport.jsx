'use client';
import dynamic from 'next/dynamic';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import 'dayjs/locale/en-in'; // Import Indian locale for dayjs

import { Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import CustomTextField from '../forms/theme-elements/CustomTextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import isBetween from 'dayjs/plugin/isBetween'; // Import the plugin
import DashboardCard from '../shared/DashboardCard';
import utc from 'dayjs/plugin/utc'; // Required by the timezone plugin
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc); // Make sure to extend UTC
dayjs.extend(timezone);
dayjs.extend(isBetween); // Extend dayjs with the isBetween plugin
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CreditReport = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const [filter, setFilter] = React.useState('yearly');
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  // Get current date and timezone
  const today = dayjs().utc().startOf('day').format('YYYY-MM-DDTHH:mm:ss[Z]');
  console.log(today);

  const yesterday = dayjs()
    .utc()
    .startOf('day')
    .subtract(1, 'day')
    .format('YYYY-MM-DDTHH:mm:ss[Z]');

  const data = {
    yearly: {
      categories: [
        '2024-01-01T00:00:00Z',
        '2024-01-02T00:00:00Z',
        '2024-01-03T00:00:00Z',
        '2024-01-04T00:00:00Z',
        '2024-01-05T00:00:00Z',
        '2024-01-06T00:00:00Z',
        '2024-01-07T00:00:00Z',
        '2024-01-08T00:00:00Z',
        '2024-01-09T00:00:00Z',
        '2024-01-10T00:00:00Z',
        '2024-01-11T00:00:00Z',
        '2024-01-12T00:00:00Z',
      ],
      seriesData: [10, 30, 20, 50, 40, 60, 70, 90, 80, 100, 110, 120],
    },
    monthly: {
      categories: [
        '2024-10-01T00:00:00Z',
        '2024-10-02T00:00:00Z',
        '2024-10-03T00:00:00Z',
        '2024-10-04T00:00:00Z',
        '2024-10-05T00:00:00Z',
        '2024-10-06T00:00:00Z',
        '2024-10-07T00:00:00Z',
        '2024-10-08T00:00:00Z',
        '2024-10-09T00:00:00Z',
        '2024-10-10T00:00:00Z',
      ],
      seriesData: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
    },
    custom: {
      categories: [
        '2024-09-01T00:00:00Z', // Ensure proper ISO 8601 format with UTC (Z at the end)
        '2024-09-05T00:00:00Z',
        '2024-09-10T00:00:00Z',
        '2024-09-15T00:00:00Z',
        '2024-09-20T00:00:00Z',
        '2024-09-25T00:00:00Z',
        '2024-09-30T00:00:00Z',
      ],
      seriesData: [5, 15, 25, 35, 45, 55, 65],
    },
    today: {
      categories: [today],
      seriesData: [75], // Example data for today
    },
    yesterday: {
      categories: [yesterday],
      seriesData: [50], // Example data for yesterday
    },
  };

  // Filter custom data based on start and end dates
  const filterCustomData = () => {
    const selectedData = data[filter];
    const filteredCategories = [];
    const filteredSeriesData = [];

    const start = dayjs(startDate).utc(); // Ensure consistent UTC handling
    const end = dayjs(endDate).utc();

    // Loop through the categories and check if they fall within the selected range
    selectedData.categories.forEach((category, index) => {
      const categoryDate = dayjs(category, 'MM/DD/YYYY').utc(); // Parse categories as UTC
      if (categoryDate.isBetween(start, end, null, '[]')) {
        filteredCategories.push(category);
        filteredSeriesData.push(selectedData.seriesData[index]);
      }
    });
    console.log({ filteredCategories, filteredSeriesData });

    return { filteredCategories, filteredSeriesData };
  };

  // Chart options
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

  // Series data
  const seriesgredientchart = [
    {
      name: 'Credit Used',
      data: filter === 'custom' ? filterCustomData().filteredSeriesData : data[filter].seriesData,
    },
  ];

  // Handle filter change
  const handleFilterChange = (event) => setFilter(event.target.value);

  return (
    <DashboardCard
      title="Credit Usage Report"
      action={
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
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="yesterday">Yesterday</MenuItem>
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
      }
    >
      <Chart
        options={optionsgredientchart}
        series={seriesgredientchart}
        type="line"
        height="300px"
        width="99%"
      />
    </DashboardCard>
  );
};

export default CreditReport;
