import { Checkbox as MUICheckbox, FormControlLabel } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface Props {
  label: string;
  value: boolean;
  onChange: () => void;
}

function Checkbox({ label, value, onChange }: Props) {
  return (
    <FormControlLabel
      control={<MUICheckbox checked={value} value={value} onChange={onChange} color="secondary" />}
      label={
        <>
          {label}
          <VisibilityIcon />
        </>
      }
      sx={{
        color: (theme) => theme.palette.common.white,
        '& .MuiFormControlLabel-label': {
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        },
      }}
    />
  );
}

export default Checkbox;
