import TextField from '@mui/material/TextField';
import React from 'react';
import { CustomTooltip } from './CustomTooltip';

export const ShiftTextField: React.FC<{
  value: number;
  setValue: (num: number) => void;
  label: string;
}> = ({ value, setValue, label }) => {
  return (
    <CustomTooltip title={label}>
      <TextField
        type="number"
        InputLabelProps={{ style: { color: 'black' } }}
        InputProps={{ inputProps: { min: 0, max: 100 }, style: { backgroundColor: 'white' } }}
        sx={{
          '& fieldset': { borderColor: 'white' },
          '& .MuiInputBase-input': { height: '12px' },
          'width': '100px',
        }}
        value={value}
        onChange={(e) => {
          const shiftValue = e.target.value ? e.target.value : '0';
          setValue(parseInt(shiftValue));
        }}
      />
    </CustomTooltip>
  );
};
