import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { services } from '../../data/services';
import { PATH_PRAXIS } from '../../routes/paths';
import * as Icons from '@mui/icons-material';

export function ServicesList() {
  const { t } = useTranslation(['praxis', 'common']);

  useEffect(() => {
    document.title = t('praxis:services.title');
  }, [t]);

  return (
    <Box>
      {/* Header */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            {t('praxis:services.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
          >
            {t('praxis:services.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service) => {
            const IconComponent = (Icons as Record<string, React.ComponentType<{ sx?: object }>>)[service.iconName] || Icons.Spa;
            return (
              <Grid size={{ xs: 12, md: 6 }} key={service.key}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <IconComponent
                        sx={{
                          fontSize: 50,
                          color: 'primary.main',
                        }}
                      />
                      <Typography variant="h5" component="h2" sx={{ fontFamily: '"Cormorant Garamond", serif' }}>
                        {t(service.titleKey)}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                      {t(service.shortDescriptionKey)}
                    </Typography>

                    <Button
                      component={Link}
                      to={`${PATH_PRAXIS.services}/${service.key}`}
                      variant="outlined"
                      color="primary"
                      fullWidth
                    >
                      {t('common:buttons.learnMore')}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
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
    </Box>
  );
}
