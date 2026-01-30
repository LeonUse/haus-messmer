export const PATH_ROOT = '/';

export const PATH_PENSION = {
  root: '/pension',
  rooms: '/pension/rooms',
  roomDetails: (id: string) => `/pension/rooms/${id}`,
  prices: '/pension/prices',
  location: '/pension/location',
  faq: '/pension/faq',
};

export const PATH_PRAXIS = {
  root: '/praxis',
  services: '/praxis/services',
  therapyFocus: '/praxis/therapy-focus',
  process: '/praxis/process',
  appointment: '/praxis/appointment',
  faq: '/praxis/faq',
};

export const PATH_PAGE = {
  contact: '/contact',
  imprint: '/imprint',
  privacy: '/privacy',
};
