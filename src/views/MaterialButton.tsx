import Button from '@mui/material/Button';
import React from 'react';
import { MaterialButtonColor } from 'src/types';

export const MaterialButton: React.FC<{
  value: string;
  color: MaterialButtonColor;
  onClick: () => void;
}> = ({ value, color, onClick }) => {
  return (
    <Button
      variant="contained"
      sx={{ width: '170px', textTransform: 'capitalize' }}
      color={color}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};
