'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSun, BsMoonStars } from 'react-icons/bs';

const ThemeBtn = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? <BsSun /> : <BsMoonStars />}
    </button>
  );
};

export default ThemeBtn;
