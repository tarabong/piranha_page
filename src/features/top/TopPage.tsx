import Image from 'next/image';
import { Box } from '@mui/material';
import { Button } from '@/common/components/button';
import { handleWindowOpen } from '@/common/logics';

export const TopPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        gap: 2,
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: { xs: '100%', sm: '600px', md: '800px' },
        mx: 'auto',
        textAlign: 'center',
        mb: '50px',
      }}
    >
      <Image
        src="/images/logo_01.JPG"
        alt="logo01"
        priority
        onContextMenu={e => e.preventDefault()}
        width={450}
        height={450}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />

      <Button onClick={() => handleWindowOpen('Suzuri')}>Suzuri</Button>
      <Button onClick={() => handleWindowOpen('YouTube')}>YouTube</Button>
      <Button onClick={() => handleWindowOpen('Instagram')}>Instagram</Button>
      <Button onClick={() => handleWindowOpen('X')}>X</Button>
      <Button href={'/profile'}>Profile</Button>
      <Button href={'/discography'}>Discography</Button>
    </Box>
  );
};
