import { MenuItem, TextField } from '@mui/material';

interface Props {
  label: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Dropdown({ label, value, options, onChange }: Props) {
  return (
    <TextField
      select
      size="small"
      label={label}
      value={value}
      onChange={onChange}
      focused
      sx={{
        width: '216px',
        '& .MuiInputBase-input': {
          color: (theme) => theme.palette.common.white,
        },
        '& .MuiSelect-icon': {
          color: (theme) => theme.palette.common.white,
        },
        '& .MuiInputLabel-root': {
          '&.Mui-focused': {
            color: (theme) => theme.palette.common.white,
          },
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: (theme) => theme.palette.common.white,
          },
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default Dropdown;
