import { Box, Container, Typography, Button, Grid, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { PATH_PENSION } from '../../routes/paths';

export function PensionOverview() {
  const { t } = useTranslation(['pension', 'common', 'seo']);

  useEffect(() => {
    document.title = t('seo:pension.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo:pension.description'));
    }
  }, [t]);

  const features = [
    {
      titleKey: 'pension:features.quiet.title',
      descriptionKey: 'pension:features.quiet.description',
    },
    {
      titleKey: 'pension:features.personal.title',
      descriptionKey: 'pension:features.personal.description',
    },
    {
      titleKey: 'pension:features.connected.title',
      descriptionKey: 'pension:features.connected.description',
    },
    {
      titleKey: 'pension:features.ideal.title',
      descriptionKey: 'pension:features.ideal.description',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '50vh', md: '60vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #B85C38 0%, #C97C5D 50%, #D4A574 100%)',
          color: 'white',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
              fontWeight: 700,
            }}
          >
            {t('pension:hero.title')}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              mb: 2,
              opacity: 0.95,
            }}
          >
            {t('pension:hero.subtitle')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              mb: 4,
              opacity: 0.9,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            {t('pension:hero.description')}
          </Typography>
          <Button
            component={Link}
            to={PATH_PENSION.rooms}
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'secondary.main',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            {t('pension:hero.cta')}
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            mb: 6,
          }}
        >
          {t('pension:features.title')}
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CheckCircleIcon
                  sx={{
                    fontSize: 60,
                    color: 'secondary.main',
                    mb: 2,
                  }}
                />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t(feature.titleKey)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(feature.descriptionKey)}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Rooms Preview Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              mb: 2,
            }}
          >
            {t('pension:rooms.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            {t('pension:rooms.subtitle')}
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              to={PATH_PENSION.rooms}
              variant="contained"
              color="secondary"
              size="large"
            >
              {t('common:buttons.viewAll')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Booking CTA Section */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            mb: 2,
          }}
        >
          {t('pension:booking.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {t('pension:booking.description')}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="https://www.booking.com/hotel/de/kurpension-messmer-tengen.de.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('pension:booking.checkAvailability')}
        </Button>
      </Container>
    </Box>
  );
}
