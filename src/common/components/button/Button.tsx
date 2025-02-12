import { type ReactNode } from 'react';
import { Button as MuiBubutton, Typography, type ButtonProps } from '@mui/material';

type Props = {
  children: ReactNode;
} & ButtonProps;

export const Button = ({ children, onClick, ...props }: Props) => {
  return (
    <MuiBubutton
      onClick={onClick}
      size="medium"
      sx={{ color: 'inherit', textTransform: 'none' }}
      {...props}
    >
      <Typography component="span" variant="inherit" sx={{ color: 'inherit', fontWeight: 500 }}>
        {children}
      </Typography>
    </MuiBubutton>
  );
};
