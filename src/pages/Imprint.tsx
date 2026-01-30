import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { CONTACT_INFO } from '../config/contact';

export function Imprint() {
  const { t } = useTranslation(['legal', 'seo']);

  useEffect(() => {
    document.title = t('seo:imprint.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo:imprint.description'));
    }
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
            {t('legal:imprint.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
          >
            {t('legal:imprint.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper sx={{ p: 4 }}>
          {/* Operator Information */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              {t('legal:imprint.operator.title')}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>{t('legal:imprint.operator.name')}</strong>
            </Typography>
            <Typography variant="body1">
              {CONTACT_INFO.address.street}
            </Typography>
            <Typography variant="body1">
              {CONTACT_INFO.address.postalCode} {CONTACT_INFO.address.city}
            </Typography>
            <Typography variant="body1">
              {CONTACT_INFO.address.country}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Contact Information */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              {t('legal:imprint.contact.title')}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>{t('legal:imprint.contact.phone')}:</strong> {CONTACT_INFO.phoneFormatted}
            </Typography>
            <Typography variant="body1">
              <strong>{t('legal:imprint.contact.email')}:</strong> {CONTACT_INFO.email}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Responsible Person */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              {t('legal:imprint.responsible.title')}
            </Typography>
            <Typography variant="body1" color="error.main" sx={{ fontStyle: 'italic' }}>
              {t('legal:imprint.responsible.placeholder')}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Disclaimer */}
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              {t('legal:imprint.disclaimer.title')}
            </Typography>
            
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              {t('legal:imprint.disclaimer.content.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('legal:imprint.disclaimer.content.text')}
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
              {t('legal:imprint.disclaimer.links.title')}
            </Typography>
            <Typography variant="body1">
              {t('legal:imprint.disclaimer.links.text')}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
