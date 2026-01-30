import { Box, Container, Typography, Button, Paper, Divider } from '@mui/material';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { services } from '../../data/services';
import { PATH_PRAXIS, PATH_PENSION } from '../../routes/paths';
import * as Icons from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function ServiceDetail() {
  const { key } = useParams<{ key: string }>();
  const { t } = useTranslation(['praxis', 'common']);
  
  const service = services.find(s => s.key === key);

  useEffect(() => {
    if (service) {
      document.title = `${t(service.titleKey)} - ${t('praxis:services.title')}`;
    }
  }, [service, t]);

  if (!service) {
    return <Navigate to={PATH_PRAXIS.services} replace />;
  }

  const IconComponent = (Icons as Record<string, React.ComponentType<{ sx?: object }>>)[service.iconName] || Icons.Spa;
  const isRetreatService = service.key === 'kuraufenthalte';

  return (
    <Box>
      {/* Back Button */}
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Button
          component={Link}
          to={PATH_PRAXIS.services}
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 2 }}
        >
          {t('common:buttons.back')}
        </Button>
      </Container>

      {/* Service Header */}
      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
          <IconComponent
            sx={{
              fontSize: 80,
              color: 'primary.main',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            {t(service.titleKey)}
          </Typography>
        </Box>
      </Container>

      {/* Service Content */}
      <Container maxWidth="md" sx={{ pb: 8 }}>
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Beschreibung
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
            {t(service.fullDescriptionKey)}
          </Typography>

          {service.benefitsKey && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Vorteile
              </Typography>
              <Box component="ul" sx={{ pl: 3, m: 0 }}>
                {t(service.benefitsKey).split('•').filter(item => item.trim()).map((benefit, index) => (
                  <Typography key={index} component="li" variant="body1" sx={{ lineHeight: 1.8, mb: 1 }}>
                    {benefit.trim()}
                  </Typography>
                ))}
              </Box>
            </>
          )}

          {service.processKey && (
            <>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Ablauf
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {t(service.processKey)}
              </Typography>
            </>
          )}

          {isRetreatService && (
            <>
              <Divider sx={{ my: 4 }} />
              <Box sx={{ bgcolor: 'primary.light', p: 3, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>
                  Unsere Pension
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: 'white', opacity: 0.95 }}>
                  Kombinieren Sie Ihre Behandlungen mit einem Aufenthalt in unserer komfortablen Pension.
                </Typography>
                <Button
                  component={Link}
                  to={PATH_PENSION.rooms}
                  variant="contained"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  Zimmer ansehen
                </Button>
              </Box>
            </>
          )}
        </Paper>

        {/* CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            {t('praxis:appointment.title')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
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
        </Box>
      </Container>
    </Box>
  );
}
