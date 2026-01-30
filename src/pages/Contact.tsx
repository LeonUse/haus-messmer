import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CONTACT_INFO } from '../config/contact';

export function Contact() {
  const { t } = useTranslation(['contact', 'common', 'forms', 'seo']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    document.title = t('seo:contact.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('seo:contact.description'));
    }
  }, [t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Kontaktanfrage - Haus Meßmer');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `E-Mail: ${formData.email}\n` +
      `Telefon: ${formData.phone}\n\n` +
      `Nachricht:\n${formData.message}`
    );
    
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

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
            {t('contact:page.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
          >
            {t('contact:page.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 1 }}>
                {t('contact:form.title')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {t('contact:form.description')}
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      fullWidth
                      label={t('common:labels.name')}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('forms:placeholders.name')}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      fullWidth
                      label={t('common:labels.email')}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t('forms:placeholders.email')}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                      fullWidth
                      label={t('common:labels.phone')}
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('forms:placeholders.phone')}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label={t('common:labels.message')}
                      name="message"
                      multiline
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={t('forms:placeholders.message')}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                    >
                      {t('common:buttons.submit')}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper sx={{ p: 4, bgcolor: 'primary.main', color: 'white', mb: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                {t('contact:info.title')}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <LocationOnIcon sx={{ fontSize: 28, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ opacity: 0.9, mb: 0.5 }}>
                      {t('contact:info.address')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {CONTACT_INFO.address.street}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {CONTACT_INFO.address.postalCode} {CONTACT_INFO.address.city}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <PhoneIcon sx={{ fontSize: 28, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ opacity: 0.9, mb: 0.5 }}>
                      {t('contact:info.phone')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {CONTACT_INFO.phoneFormatted}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <EmailIcon sx={{ fontSize: 28, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ opacity: 0.9, mb: 0.5 }}>
                      {t('contact:info.email')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {CONTACT_INFO.email}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <AccessTimeIcon sx={{ fontSize: 28, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ opacity: 0.9, mb: 0.5 }}>
                      {t('contact:info.hours')}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {CONTACT_INFO.openingHours.weekdays}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {CONTACT_INFO.openingHours.saturday}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>

            {/* Map Placeholder */}
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {t('contact:map.title')}
              </Typography>
              <Box
                sx={{
                  height: 250,
                  bgcolor: 'grey.200',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <LocationOnIcon sx={{ fontSize: 60, color: 'grey.400' }} />
              </Box>
              <Button
                variant="outlined"
                color="primary"
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
              >
                {t('contact:map.viewOnMaps')}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
