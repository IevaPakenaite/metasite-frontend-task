import { Button as MUIButton } from '@mui/material';

interface Props {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: Props) {
  return (
    <MUIButton
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        color: '#1A1C1E',
        marginLeft: '0 14px',
      }}
      onClick={onClick}
      size="small"
    >
      {label}
    </MUIButton>
  );
}

export default Button;
