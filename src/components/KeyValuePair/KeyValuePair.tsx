import { Grid2, Link, Typography } from '@mui/material';

interface Props {
  label: string;
  value: string;
  isEmail?: boolean;
}

function KeyValuePair({ label, value, isEmail = false }: Props) {
  return (
    <Grid2 container spacing={4.5} alignItems="center">
      <Grid2 size={4}>
        <Typography
          variant="body1"
          fontSize={12}
          textAlign="right"
          sx={{ color: (theme) => theme.palette.tertiary.main }}
        >
          {label}
        </Typography>
      </Grid2>
      <Grid2 size={8}>
        {isEmail ? (
          <Link
            href={`mailto:${value}`}
            sx={{
              textDecoration: 'none',
              color: (theme) => theme.palette.primary.main,
              fontSize: '12px',
            }}
          >
            {value}
          </Link>
        ) : (
          <Typography
            variant="body1"
            fontSize={12}
            sx={{ color: (theme) => theme.palette.tertiary.main }}
          >
            {value}
          </Typography>
        )}
      </Grid2>
    </Grid2>
  );
}

export default KeyValuePair;
