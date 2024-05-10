import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Language } from 'src/constants';

export const LanguageSelect: React.FC<{ value: Language; onChange: (lang: Language) => void }> = ({
  value,
  onChange,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value === Language.English ? Language.English : Language.Norsk);
  };

  return (
    <FormControl sx={{ ml: 'auto', minWidth: 100 }} className="language-select">
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
        onChange={handleChange}
        autoWidth
        sx={{
          'backgroundColor': 'white',
          'color': 'black',
          '& .MuiSelect-select': {
            color: 'inherit',
          },
        }}
      >
        <MenuItem value={Language.English}>🇬🇧 EN</MenuItem>
        <MenuItem value={Language.Norsk}>🇳🇴 NO</MenuItem>
      </Select>
    </FormControl>
  );
};
