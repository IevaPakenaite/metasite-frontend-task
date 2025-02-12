import { Checkbox as MUICheckbox, FormControlLabel } from '@mui/material';

interface Props {
  label: string;
  value: boolean;
  onChange: () => void;
}

function Checkbox({ label, value, onChange }: Props) {
  return (
    <FormControlLabel
      control={<MUICheckbox checked={value} value={value} onChange={onChange} color="secondary" />}
      label={label}
      sx={{ color: (theme) => theme.palette.common.white }}
    />
  );
}

export default Checkbox;
