import { Typography, TypographyProps } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string;
} & TypographyProps;

export const Link = ({ href, children }: Props) => {
  return (
    <Typography
      component={Link}
      href={href}
      variant="inherit"
      sx={{ color: 'inherit', fontWeight: 500, textDecoration: 'none' }}
    >
      {children}
    </Typography>
  );
};
