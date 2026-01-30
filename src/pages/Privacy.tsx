import { Box, Container, Typography, Paper, Divider, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { CONTACT_INFO } from '../config/contact';

export function Privacy() {
  const { t } = useTranslation(['legal', 'seo']);

  useEffect(() => {
    document.title = t('seo:privacy.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo:privacy.description'));
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
            {t('legal:privacy.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
          >
            {t('legal:privacy.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Alert severity="warning" sx={{ mb: 4 }}>
          {t('legal:privacy.placeholder')}
        </Alert>

        <Paper sx={{ p: 4 }}>
          {/* Introduction */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              {t('legal:privacy.intro.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('legal:privacy.intro.text')}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Data Collection */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              {t('legal:privacy.collection.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('legal:privacy.collection.text')}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Data Usage */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              {t('legal:privacy.usage.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('legal:privacy.usage.text')}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* User Rights */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              {t('legal:privacy.rights.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('legal:privacy.rights.text')}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Contact for Privacy Questions */}
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              {t('legal:privacy.contact.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('legal:privacy.contact.text')}
            </Typography>
            <Typography variant="body1">
              <strong>E-Mail:</strong> {CONTACT_INFO.email}
            </Typography>
            <Typography variant="body1">
              <strong>Telefon:</strong> {CONTACT_INFO.phoneFormatted}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
