import type { HighlightDto } from '../types';

export const mockHighlights: HighlightDto[] = [
  {
    id: '1',
    title: 'Total Generation Capacity',
    description: 'Current installed capacity',
    value: '2,845 MW',
    icon: 'Zap',
    trend: 'up',
    trendValue: '+125 MW'
  },
  {
    id: '2',
    title: 'Renewable Energy Share',
    description: 'Percentage from renewables',
    value: '47.3%',
    icon: 'LightBulbIcon',
    trend: 'up',
    trendValue: '+3.2%'
  },
  {
    id: '3',
    title: 'Active Power Plants',
    description: 'Currently operational',
    value: '28',
    icon: 'BuildingOfficeIcon',
    trend: 'up',
    trendValue: '+2'
  },
  {
    id: '4',
    title: 'Carbon Reduction',
    description: 'CO₂ emissions reduced',
    value: '18.5%',
    icon: 'GlobeAltIcon',
    trend: 'up',
    trendValue: '+2.3%'
  }
];
