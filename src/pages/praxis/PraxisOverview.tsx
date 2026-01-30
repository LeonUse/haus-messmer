import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { services } from '../../data/services';
import { PATH_PRAXIS } from '../../routes/paths';
import * as Icons from '@mui/icons-material';

export function PraxisOverview() {
  const { t } = useTranslation(['praxis', 'common', 'seo']);

  useEffect(() => {
    document.title = t('seo:praxis.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo:praxis.description'));
    }
  }, [t]);

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
          background: 'linear-gradient(135deg, #3A6B1F 0%, #5A8B3F 50%, #9CAF88 100%)',
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
            {t('praxis:hero.title')}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              mb: 4,
              opacity: 0.95,
            }}
          >
            {t('praxis:hero.subtitle')}
          </Typography>
          <Button
            component={Link}
            to={PATH_PRAXIS.services}
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
            {t('praxis:hero.cta')}
          </Button>
        </Container>
      </Box>

      {/* Intro Section */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            mb: 3,
          }}
        >
          {t('praxis:intro.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
          {t('praxis:intro.description')}
        </Typography>
      </Container>

      {/* Services Preview */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              mb: 6,
            }}
          >
            {t('praxis:services.title')}
          </Typography>
          <Grid container spacing={3}>
            {services.slice(0, 6).map((service) => {
              const IconComponent = (Icons as Record<string, React.ComponentType<{ sx?: object }>>)[service.iconName] || Icons.Spa;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.key}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 2,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent>
                      <IconComponent
                        sx={{
                          fontSize: 50,
                          color: 'primary.main',
                          mb: 2,
                        }}
                      />
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {t(service.titleKey)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {t(service.shortDescriptionKey)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={Link}
              to={PATH_PRAXIS.services}
              variant="contained"
              color="primary"
              size="large"
            >
              {t('common:buttons.viewAll')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            mb: 2,
          }}
        >
          {t('praxis:appointment.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {t('praxis:appointment.subtitle')}
        </Typography>
        <Button
          component={Link}
          to={PATH_PRAXIS.appointment}
          variant="contained"
          color="primary"
          size="large"
        >
          {t('common:buttons.contact')}
        </Button>
      </Container>
    </Box>
  );
}
