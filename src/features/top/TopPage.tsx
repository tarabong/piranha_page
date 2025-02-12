import Image from 'next/image';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { Button } from '@/common/components/button';

export const TopPage = () => {
  const router = useRouter();

  const handleClick = (pathName?: string) => () => {
    if (pathName) {
      router.push(`/${pathName}`);
    } else {
      alert('準備中');
    }
  };

  const handleClickTouTube = () => {
    window.open(process.env.NEXT_PUBLIC_YOUTUBE_URL);
  };

  const handleClickInstagram = () => {
    window.open(process.env.NEXT_PUBLIC_INSTAGRAM_URL);
  };

  const handleClickSuzuri = () => {
    window.open(process.env.NEXT_PUBLIC_SUZURI_URL);
  };

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
        width={450}
        height={450}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />

      <Button onClick={handleClickSuzuri}>Suzuri</Button>
      <Button onClick={handleClickTouTube}>YouTube</Button>
      <Button onClick={handleClickInstagram}>Instagram</Button>
      <Button>X</Button>
      <Button>Profile</Button>
      <Button onClick={handleClick('discography')}>Discography</Button>
    </Box>
  );
};
