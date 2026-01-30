export interface Room {
  id: string;
  type: 'single' | 'double' | 'apartment';
  nameKey: string;
  descriptionKey: string;
  images: string[];
  features: string[];
  size?: number;
  maxGuests: number;
  bookingUrl?: string;
}

export const rooms: Room[] = [
  {
    id: 'room-1',
    type: 'single',
    nameKey: 'rooms.room1.name',
    descriptionKey: 'rooms.room1.description',
    images: [
      '/rooms/room 1/room.jpg',
      '/rooms/room 1/bed.jpg',
      '/rooms/room 1/bed 2.jpg',
      '/rooms/room 1/shower.jpg',
      '/rooms/room 1/toilet.jpg',
    ],
    features: [
      'rooms.features.singleBed',
      'rooms.features.privateBathroom',
      'rooms.features.shower',
      'rooms.features.wifi',
    ],
    maxGuests: 1,
  },
  {
    id: 'room-2',
    type: 'double',
    nameKey: 'rooms.room2.name',
    descriptionKey: 'rooms.room2.description',
    images: [
      '/rooms/room 2/bed.jpg',
      '/rooms/room 2/bed 2.jpg',
      '/rooms/room 2/bed 3.jpg',
      '/rooms/room 2/bed 4.jpg',
      '/rooms/room 2/bathroom.jpg',
    ],
    features: [
      'rooms.features.doubleBed',
      'rooms.features.privateBathroom',
      'rooms.features.wifi',
      'rooms.features.spacious',
    ],
    maxGuests: 2,
  },
  {
    id: 'room-3',
    type: 'single',
    nameKey: 'rooms.room3.name',
    descriptionKey: 'rooms.room3.description',
    images: [
      '/rooms/room 3/room.jpg',
      '/rooms/room 3/bed.jpg',
      '/rooms/room 3/bathroom.jpg',
    ],
    features: [
      'rooms.features.singleBed',
      'rooms.features.privateBathroom',
      'rooms.features.wifi',
      'rooms.features.quiet',
    ],
    maxGuests: 1,
  },
  {
    id: 'room-4',
    type: 'single',
    nameKey: 'rooms.room4.name',
    descriptionKey: 'rooms.room4.description',
    images: [
      '/rooms/room 4/room.jpg',
      '/rooms/room 4/bed.jpg',
      '/rooms/room 4/bathroom.jpg',
    ],
    features: [
      'rooms.features.singleBed',
      'rooms.features.privateBathroom',
      'rooms.features.wifi',
      'rooms.features.cozy',
    ],
    maxGuests: 1,
  },
  {
    id: 'apartment',
    type: 'apartment',
    nameKey: 'rooms.apartment.name',
    descriptionKey: 'rooms.apartment.description',
    images: [
      '/rooms/seminar room/room.jpg',
      '/rooms/seminar room/room 2.jpg',
      '/rooms/seminar room/kitchen.jpg',
      '/rooms/seminar room/table.jpg',
      '/rooms/seminar room/bathroom.jpg',
      '/rooms/seminar room/wardrobe.jpg',
    ],
    features: [
      'rooms.features.kitchen',
      'rooms.features.livingArea',
      'rooms.features.privateBathroom',
      'rooms.features.wifi',
      'rooms.features.spacious',
    ],
    maxGuests: 4,
  },
];
