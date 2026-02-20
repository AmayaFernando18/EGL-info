import type { HeroCarouselImageDto } from '../types';

export const mockHeroImages: HeroCarouselImageDto[] = [
  {
    id: '1',
    title: 'Powering Sri Lanka\'s Future',
    description: 'Sustainable energy generation for a brighter tomorrow',
    imageUrl: '/images/silhouette-photo-of-transmission-tower.jpg',
    order: 1
  },
  {
    id: '2',
    title: 'Harnessing Renewable Energy',
    description: 'Leading the transition to clean power',
    imageUrl: '/images/panels-electricity-order-sunlight.webp',
    order: 2
  },
  {
    id: '3',
    title: 'Innovation in Power Generation',
    description: 'Advanced technology for reliable electricity',
    imageUrl: '/images/large_wind.jpg',
    order: 3
  }
];
