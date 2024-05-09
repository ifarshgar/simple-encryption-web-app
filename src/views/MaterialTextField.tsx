import TextField from '@mui/material/TextField';
import React from 'react';
import { TextFieldType } from 'src/constants';
import { CustomTooltip } from './CustomTooltip';

export const MaterialTextField: React.FC<{
  id: TextFieldType;
  value: string;
  label: string;
  onChange: (str: string, id: TextFieldType) => void;
  onKeyUp: (key: string, id: TextFieldType) => void;
}> = ({ id, value, label, onChange, onKeyUp }) => {
  return (
    <CustomTooltip title={label} placement="right">
      <TextField
        placeholder={label}
        variant="outlined"
        InputProps={{ style: { backgroundColor: 'white' } }}
        sx={{ '& fieldset': { borderColor: 'white' } }}
        value={value}
        onChange={(e) => onChange(e.target.value, id)}
        onKeyUp={(e) => onKeyUp(e.key, id)}
      />
    </CustomTooltip>
  );
};
