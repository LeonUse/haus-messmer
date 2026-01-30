import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import HotelIcon from '@mui/icons-material/Hotel';
import SpaIcon from '@mui/icons-material/Spa';
import { PATH_PENSION, PATH_PRAXIS } from '../routes/paths';

export function HomePage() {
  const { t } = useTranslation(['common', 'pension', 'praxis', 'seo']);

  useEffect(() => {
    document.title = t('seo:home.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo:home.description'));
    }
  }, [t]);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3A6B1F 0%, #5A8B3F 50%, #9CAF88 100%)',
          color: 'white',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 2,
              fontWeight: 700,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              animation: 'fadeInUp 0.8s ease-out',
              '@keyframes fadeInUp': {
                from: {
                  opacity: 0,
                  transform: 'translateY(30px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            {t('common:welcome')}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.75rem' },
              mb: 4,
              opacity: 0.95,
              fontWeight: 400,
              animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
            }}
          >
            {t('common:subtitle')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
            }}
          >
            <Button
              component={Link}
              to={PATH_PENSION.rooms}
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              {t('common:buttons.bookNow')}
            </Button>
            <Button
              component={Link}
              to={PATH_PRAXIS.services}
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {t('praxis:hero.cta')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Two Sections Introduction */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Pension Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Box
                sx={{
                  height: 200,
                  background: 'linear-gradient(135deg, #B85C38 0%, #C97C5D 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <HotelIcon sx={{ fontSize: 80, color: 'white' }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" gutterBottom sx={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  {t('pension:hero.title')}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                  {t('pension:hero.subtitle')}
                </Typography>
                <Button
                  component={Link}
                  to={PATH_PENSION.root}
                  variant="contained"
                  color="secondary"
                  fullWidth
                >
                  {t('common:buttons.learnMore')}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Praxis Card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Box
                sx={{
                  height: 200,
                  background: 'linear-gradient(135deg, #3A6B1F 0%, #5A8B3F 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SpaIcon sx={{ fontSize: 80, color: 'white' }} />
              </Box>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" gutterBottom sx={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  {t('praxis:hero.title')}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                  {t('praxis:hero.subtitle')}
                </Typography>
                <Button
                  component={Link}
                  to={PATH_PRAXIS.root}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  {t('common:buttons.learnMore')}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* USP Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              mb: 3,
            }}
          >
            Ganzheitliche Erholung
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            Unterkunft & Heilung unter einem Dach
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Erleben Sie die einzigartige Kombination aus komfortabler Unterkunft und professioneller
            Naturheilkunde im malerischen Hegau. Ihre Gesundheit und Ihr Wohlbefinden stehen bei uns
            im Mittelpunkt.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
