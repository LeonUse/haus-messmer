import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CONTACT_INFO } from '../../config/contact';

export function Appointment() {
  const { t } = useTranslation(['praxis', 'common', 'forms']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    document.title = t('praxis:appointment.title');
  }, [t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Terminanfrage - Naturheilpraxis Haus Meßmer');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `E-Mail: ${formData.email}\n` +
      `Telefon: ${formData.phone}\n\n` +
      `Nachricht:\n${formData.message}`
    );
    
    // Open user's email client
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
            {t('praxis:appointment.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
          >
            {t('praxis:appointment.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                {t('praxis:appointment.form.title')}
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
            <Paper sx={{ p: 4, bgcolor: 'primary.main', color: 'white' }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                {t('praxis:appointment.contact.title')}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <PhoneIcon sx={{ fontSize: 28, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ opacity: 0.9, mb: 0.5 }}>
                      {t('praxis:appointment.contact.phone')}
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
                      {t('praxis:appointment.contact.email')}
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
                      {t('praxis:appointment.contact.hours')}
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
