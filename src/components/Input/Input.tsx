import { TextField } from '@mui/material';

interface Props {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, value, onChange }: Props) {
  return (
    <TextField
      label={label}
      size="small"
      value={value}
      onChange={onChange}
      focused
      sx={{
        width: '216px',
        '& .MuiInputBase-input': {
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
    />
  );
}

export default Input;
