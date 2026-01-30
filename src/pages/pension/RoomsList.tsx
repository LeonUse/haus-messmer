import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { rooms } from '../../data/rooms';
import { PATH_PENSION } from '../../routes/paths';
import PeopleIcon from '@mui/icons-material/People';

export function RoomsList() {
  const { t } = useTranslation(['pension', 'common']);

  useEffect(() => {
    document.title = t('pension:rooms.title');
  }, [t]);

  const getRoomTypeLabel = (type: string) => {
    switch (type) {
      case 'single':
        return 'Einzelzimmer';
      case 'double':
        return 'Doppelzimmer';
      case 'apartment':
        return 'Apartment';
      default:
        return type;
    }
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
            {t('pension:rooms.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
          >
            {t('pension:rooms.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Rooms Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {rooms.map((room) => (
            <Grid size={{ xs: 12, md: 6 }} key={room.id}>
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
                <CardMedia
                  component="img"
                  height="250"
                  image={room.images[0]}
                  alt={t(room.nameKey)}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h5" component="h2" sx={{ fontFamily: '"Cormorant Garamond", serif' }}>
                      {t(room.nameKey)}
                    </Typography>
                    <Chip
                      label={getRoomTypeLabel(room.type)}
                      color="secondary"
                      size="small"
                    />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                    {t(room.descriptionKey)}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <PeopleIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {t('pension:rooms.maxGuests', { count: room.maxGuests })}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {room.features.slice(0, 4).map((featureKey, index) => (
                      <Chip
                        key={index}
                        label={t(featureKey)}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      component={Link}
                      to={PATH_PENSION.roomDetails(room.id)}
                      variant="outlined"
                      color="secondary"
                      fullWidth
                    >
                      {t('pension:rooms.viewRoom')}
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      href="https://www.booking.com/hotel/de/kurpension-messmer-tengen.de.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('pension:rooms.bookRoom')}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
