import { Box, Container, Grid, Typography, Link as MuiLink, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PATH_PENSION, PATH_PRAXIS, PATH_PAGE } from '../../routes/paths';
import { CONTACT_INFO } from '../../config/contact';

export function Footer() {
  const { t } = useTranslation(['navigation', 'common']);

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #3A6B1F 0%, #9CAF88 50%, #B85C38 100%)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand & Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Haus Meßmer
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              {t('common:subtitle')}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Erholung und Gesundheit im malerischen Hegau
            </Typography>
          </Grid>

          {/* Quick Links - Pension */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              {t('navigation:main.pension')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink
                component={Link}
                to={PATH_PENSION.root}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.8,
                  fontSize: '0.875rem',
                  '&:hover': { opacity: 1, textDecoration: 'underline' },
                }}
              >
                {t('navigation:pension.overview')}
              </MuiLink>
              <MuiLink
                component={Link}
                to={PATH_PENSION.rooms}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.8,
                  fontSize: '0.875rem',
                  '&:hover': { opacity: 1, textDecoration: 'underline' },
                }}
              >
                {t('navigation:pension.rooms')}
              </MuiLink>
            </Box>
          </Grid>

          {/* Quick Links - Praxis */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              {t('navigation:main.praxis')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <MuiLink
                component={Link}
                to={PATH_PRAXIS.root}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.8,
                  fontSize: '0.875rem',
                  '&:hover': { opacity: 1, textDecoration: 'underline' },
                }}
              >
                {t('navigation:praxis.overview')}
              </MuiLink>
              <MuiLink
                component={Link}
                to={PATH_PRAXIS.services}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.8,
                  fontSize: '0.875rem',
                  '&:hover': { opacity: 1, textDecoration: 'underline' },
                }}
              >
                {t('navigation:praxis.services')}
              </MuiLink>
              <MuiLink
                component={Link}
                to={PATH_PRAXIS.appointment}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  opacity: 0.8,
                  fontSize: '0.875rem',
                  '&:hover': { opacity: 1, textDecoration: 'underline' },
                }}
              >
                {t('navigation:praxis.appointment')}
              </MuiLink>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              {t('navigation:footer.contactInfo')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ fontSize: '1.2rem', opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {CONTACT_INFO.address.street}, {CONTACT_INFO.address.postalCode} {CONTACT_INFO.address.city}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: '1.2rem', opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {CONTACT_INFO.phoneFormatted}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: '1.2rem', opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {CONTACT_INFO.email}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Haus Meßmer. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <MuiLink
              component={Link}
              to={PATH_PAGE.imprint}
              sx={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.7,
                fontSize: '0.875rem',
                '&:hover': { opacity: 1 },
              }}
            >
              {t('navigation:footer.imprint')}
            </MuiLink>
            <MuiLink
              component={Link}
              to={PATH_PAGE.privacy}
              sx={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.7,
                fontSize: '0.875rem',
                '&:hover': { opacity: 1 },
              }}
            >
              {t('navigation:footer.privacy')}
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
