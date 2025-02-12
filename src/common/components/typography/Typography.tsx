import { Typography as MuiTypography } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string;
};

export const Typography = ({ children, href }: Props) => {
  return (
    <>
      {href ? (
        <MuiTypography
          component={Link}
          href={href}
          variant="inherit"
          sx={{
            color: 'inherit',
            fontWeight: 500,
            textDecoration: 'none',
            fontSize: '14px',
            p: '6px 8px',
            ':hover': {
              bgcolor: 'gray',
              borderRadius: '4px',
            },
          }}
        >
          {children}
        </MuiTypography>
      ) : (
        <MuiTypography
          component="span"
          variant="inherit"
          sx={{ color: 'inherit', fontWeight: 500 }}
        >
          {children}
        </MuiTypography>
      )}
    </>
  );
};
