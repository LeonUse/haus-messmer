import { Box, Container, Typography, Button, Grid, Chip, ImageList, ImageListItem } from '@mui/material';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { rooms } from '../../data/rooms';
import { PATH_PENSION } from '../../routes/paths';
import PeopleIcon from '@mui/icons-material/People';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function RoomDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation(['pension', 'common']);
  
  const room = rooms.find(r => r.id === id);

  useEffect(() => {
    if (room) {
      document.title = `${t(room.nameKey)} - ${t('pension:rooms.title')}`;
    }
  }, [room, t]);

  if (!room) {
    return <Navigate to={PATH_PENSION.rooms} replace />;
  }

  return (
    <Box>
      {/* Back Button */}
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        <Button
          component={Link}
          to={PATH_PENSION.rooms}
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 2 }}
        >
          {t('common:buttons.back')}
        </Button>
      </Container>

      {/* Room Header */}
      <Container maxWidth="lg" sx={{ pb: 4 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
          }}
        >
          {t(room.nameKey)}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
          <Chip
            icon={<PeopleIcon />}
            label={t('pension:rooms.maxGuests', { count: room.maxGuests })}
            color="secondary"
          />
        </Box>
      </Container>

      {/* Image Gallery */}
      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <ImageList
          sx={{ width: '100%', height: 'auto' }}
          cols={3}
          rowHeight={250}
          gap={16}
        >
          {room.images.map((image, index) => (
            <ImageListItem key={index}>
              <img
                src={image}
                alt={`${t(room.nameKey)} - ${index + 1}`}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      {/* Room Details */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Beschreibung
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              {t(room.descriptionKey)}
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
              Ausstattung
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {room.features.map((featureKey, index) => (
                <Chip
                  key={index}
                  label={t(featureKey)}
                  color="secondary"
                  variant="outlined"
                />
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                position: 'sticky',
                top: 100,
                bgcolor: 'background.paper',
                p: 3,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                {t('pension:booking.title')}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {t('pension:booking.description')}
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                href="https://www.booking.com/hotel/de/kurpension-messmer-tengen.de.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('pension:booking.checkAvailability')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
