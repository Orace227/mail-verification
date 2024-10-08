import { Card } from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

const AppCard = ({ children }) => {
  const customizer = useSelector((state) => state.customizer);

  return (
    <Card
      sx={{ display: 'flex', p: 0, my: 1 }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      {children}
    </Card>
  );
};

AppCard.propTypes = {
  children: PropTypes.node,
};

export default AppCard;
