/**
 * Central contact information configuration for Haus Meßmer
 * This file contains all contact details used throughout the application
 */

export const CONTACT_INFO = {
  phone: '077369249999',
  phoneFormatted: '+49 7736 9249999',
  email: 'info@haus-messmer.de',
  address: {
    street: 'Ludwig-Gerer-Straße 46',
    postalCode: '78260',
    city: 'Tengen',
    country: 'Deutschland',
    full: 'Ludwig-Gerer-Straße 46, 78260 Tengen, Deutschland',
  },
  openingHours: {
    weekdays: 'Mo-Fr: 9:00 - 18:00',
    saturday: 'Sa: Nach Vereinbarung',
  },
  bookingUrl: 'https://www.booking.com/hotel/de/kurpension-messmer-tengen.de.html',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ludwig-Gerer-Straße+46,+78260+Tengen',
} as const;
