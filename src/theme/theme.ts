import { createTheme, type ThemeOptions } from '@mui/material/styles';

// Organic-Natural Design System for Haus Meßmer
// Combining healing, nature, and modern professionalism

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#3A6B1F', // Forest Green - Nature, Healing
      light: '#5A8B3F',
      dark: '#2D5016',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#B85C38', // Warm Terracotta - Warmth, Welcome
      light: '#C97C5D',
      dark: '#9A4A2E',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#9CAF88', // Sage Green - Herbs, Natural Medicine
      light: '#B5C5A3',
      dark: '#7A8C6A',
      contrastText: '#2D5016',
    },
    background: {
      default: '#F5F1E8', // Cream White - Calm, Clean
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#5A5A5A',
    },
    divider: 'rgba(61, 107, 31, 0.12)',
  },
  typography: {
    fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", "Georgia", serif',
      fontWeight: 600,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", "Georgia", serif',
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Cormorant Garamond", "Georgia", serif',
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Cormorant Garamond", "Georgia", serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12, // Organic, soft corners
  },
  shadows: [
    'none',
    '0px 2px 8px rgba(45, 80, 22, 0.08)',
    '0px 4px 12px rgba(45, 80, 22, 0.1)',
    '0px 6px 16px rgba(45, 80, 22, 0.12)',
    '0px 8px 20px rgba(45, 80, 22, 0.14)',
    '0px 10px 24px rgba(45, 80, 22, 0.16)',
    '0px 12px 28px rgba(45, 80, 22, 0.18)',
    '0px 14px 32px rgba(45, 80, 22, 0.2)',
    '0px 16px 36px rgba(45, 80, 22, 0.22)',
    '0px 18px 40px rgba(45, 80, 22, 0.24)',
    '0px 20px 44px rgba(45, 80, 22, 0.26)',
    '0px 22px 48px rgba(45, 80, 22, 0.28)',
    '0px 24px 52px rgba(45, 80, 22, 0.3)',
    '0px 26px 56px rgba(45, 80, 22, 0.32)',
    '0px 28px 60px rgba(45, 80, 22, 0.34)',
    '0px 30px 64px rgba(45, 80, 22, 0.36)',
    '0px 32px 68px rgba(45, 80, 22, 0.38)',
    '0px 34px 72px rgba(45, 80, 22, 0.4)',
    '0px 36px 76px rgba(45, 80, 22, 0.42)',
    '0px 38px 80px rgba(45, 80, 22, 0.44)',
    '0px 40px 84px rgba(45, 80, 22, 0.46)',
    '0px 42px 88px rgba(45, 80, 22, 0.48)',
    '0px 44px 92px rgba(45, 80, 22, 0.5)',
    '0px 46px 96px rgba(45, 80, 22, 0.52)',
    '0px 48px 100px rgba(45, 80, 22, 0.54)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: '10px 24px',
          fontSize: '1rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 6px 20px rgba(45, 80, 22, 0.25)',
          },
        },
        contained: {
          boxShadow: '0px 4px 12px rgba(45, 80, 22, 0.15)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 16px rgba(45, 80, 22, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 12px 28px rgba(45, 80, 22, 0.15)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(61, 107, 31, 0.08)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover fieldset': {
              borderColor: '#3A6B1F',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
