import { AppBar, Toolbar, Container, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PATH_ROOT, PATH_PENSION, PATH_PRAXIS, PATH_PAGE } from '../../routes/paths';

export function Navbar() {
  const { t, i18n } = useTranslation(['navigation', 'common']);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pensionAnchor, setPensionAnchor] = useState<null | HTMLElement>(null);
  const [praxisAnchor, setPraxisAnchor] = useState<null | HTMLElement>(null);
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangAnchor(null);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navItems = [
    { label: t('navigation:main.home'), path: PATH_ROOT },
    { 
      label: t('navigation:main.pension'), 
      path: PATH_PENSION.root,
      submenu: [
        { label: t('navigation:pension.overview'), path: PATH_PENSION.root },
        { label: t('navigation:pension.rooms'), path: PATH_PENSION.rooms },
      ]
    },
    { 
      label: t('navigation:main.praxis'), 
      path: PATH_PRAXIS.root,
      submenu: [
        { label: t('navigation:praxis.overview'), path: PATH_PRAXIS.root },
        { label: t('navigation:praxis.services'), path: PATH_PRAXIS.services },
        { label: t('navigation:praxis.appointment'), path: PATH_PRAXIS.appointment },
      ]
    },
    { label: t('navigation:main.contact'), path: PATH_PAGE.contact },
  ];

  const drawer = (
    <Box sx={{ width: 280, height: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', fontWeight: 600, color: 'primary.main' }}>
          Haus Meßmer
        </Box>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <Box key={item.label}>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                selected={isActivePath(item.path)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
            {item.submenu && (
              <List sx={{ pl: 2 }}>
                {item.submenu.map((subitem) => (
                  <ListItem key={subitem.label} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={subitem.path}
                      onClick={handleDrawerToggle}
                      sx={{ py: 0.5 }}
                    >
                      <ListItemText primary={subitem.label} primaryTypographyProps={{ variant: 'body2' }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo */}
            <Box
              component={Link}
              to={PATH_ROOT}
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 600,
                color: 'primary.main',
                textDecoration: 'none',
                transition: 'color 0.3s',
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              Haus Meßmer
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Button
                  component={Link}
                  to={PATH_ROOT}
                  sx={{
                    color: isActivePath(PATH_ROOT) && location.pathname === PATH_ROOT ? 'primary.main' : 'text.primary',
                    fontWeight: isActivePath(PATH_ROOT) && location.pathname === PATH_ROOT ? 600 : 400,
                  }}
                >
                  {t('navigation:main.home')}
                </Button>

                <Button
                  onClick={(e) => setPensionAnchor(e.currentTarget)}
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    color: isActivePath(PATH_PENSION.root) ? 'primary.main' : 'text.primary',
                    fontWeight: isActivePath(PATH_PENSION.root) ? 600 : 400,
                  }}
                >
                  {t('navigation:main.pension')}
                </Button>
                <Menu
                  anchorEl={pensionAnchor}
                  open={Boolean(pensionAnchor)}
                  onClose={() => setPensionAnchor(null)}
                >
                  <MenuItem component={Link} to={PATH_PENSION.root} onClick={() => setPensionAnchor(null)}>
                    {t('navigation:pension.overview')}
                  </MenuItem>
                  <MenuItem component={Link} to={PATH_PENSION.rooms} onClick={() => setPensionAnchor(null)}>
                    {t('navigation:pension.rooms')}
                  </MenuItem>
                </Menu>

                <Button
                  onClick={(e) => setPraxisAnchor(e.currentTarget)}
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    color: isActivePath(PATH_PRAXIS.root) ? 'primary.main' : 'text.primary',
                    fontWeight: isActivePath(PATH_PRAXIS.root) ? 600 : 400,
                  }}
                >
                  {t('navigation:main.praxis')}
                </Button>
                <Menu
                  anchorEl={praxisAnchor}
                  open={Boolean(praxisAnchor)}
                  onClose={() => setPraxisAnchor(null)}
                >
                  <MenuItem component={Link} to={PATH_PRAXIS.root} onClick={() => setPraxisAnchor(null)}>
                    {t('navigation:praxis.overview')}
                  </MenuItem>
                  <MenuItem component={Link} to={PATH_PRAXIS.services} onClick={() => setPraxisAnchor(null)}>
                    {t('navigation:praxis.services')}
                  </MenuItem>
                  <MenuItem component={Link} to={PATH_PRAXIS.appointment} onClick={() => setPraxisAnchor(null)}>
                    {t('navigation:praxis.appointment')}
                  </MenuItem>
                </Menu>

                <Button
                  component={Link}
                  to={PATH_PAGE.contact}
                  sx={{
                    color: isActivePath(PATH_PAGE.contact) ? 'primary.main' : 'text.primary',
                    fontWeight: isActivePath(PATH_PAGE.contact) ? 600 : 400,
                  }}
                >
                  {t('navigation:main.contact')}
                </Button>

                {/* Language Switcher */}
                <IconButton onClick={(e) => setLangAnchor(e.currentTarget)} size="small">
                  <LanguageIcon />
                </IconButton>
                <Menu
                  anchorEl={langAnchor}
                  open={Boolean(langAnchor)}
                  onClose={() => setLangAnchor(null)}
                >
                  <MenuItem onClick={() => handleLanguageChange('de')} selected={i18n.language === 'de'}>
                    Deutsch
                  </MenuItem>
                  <MenuItem onClick={() => handleLanguageChange('en')} selected={i18n.language === 'en'}>
                    English
                  </MenuItem>
                </Menu>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label={t('common:buttons.close')}
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
