import { Box } from '@mui/material';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
