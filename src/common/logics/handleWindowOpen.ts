type name = 'YouTube' | 'Instagram' | 'X' | 'Suzuri';

export const handleWindowOpen = (name: name) => {
  switch (name) {
    case 'YouTube':
      return window.open(process.env.NEXT_PUBLIC_YOUTUBE_URL);
    case 'Instagram':
      return window.open(process.env.NEXT_PUBLIC_INSTAGRAM_URL);
    case 'X':
      return window.open(process.env.NEXT_PUBLIC_X_URL);
    case 'Suzuri':
      return window.open(process.env.NEXT_PUBLIC_SUZURI_URL);
  }
};
