import type { NewsDto } from '../types';

export const mockNews: NewsDto[] = [
  {
    id: '1',
    title: 'New Solar Farm Project Launched in Hambantota',
    excerpt: 'EGL unveils ambitious 100MW solar power facility to enhance renewable energy capacity.',
    content: 'Full article content here...',
    category: 'Renewable Energy',
    imageUrl: '/images/power-cell.jpg',
    publishedAt: '2026-02-05',
    author: 'Renewable Energy Division'
  },
  {
    id: '2',
    title: 'Hydro Power Generation Reaches Record Levels',
    excerpt: 'Unprecedented rainfall leads to optimal reservoir levels across all major hydro plants.',
    content: 'Full article content here...',
    category: 'Hydropower',
    imageUrl: '/images/hydro-power.jpg',
    publishedAt: '2026-02-04',
    author: 'Hydro Operations Team'
  },
  {
    id: '3',
    title: 'Annual Maintenance Schedule for Thermal Plants',
    excerpt: 'Planned maintenance activities for Q1 2026 announced for all thermal generation facilities.',
    content: 'Full article content here...',
    category: 'Operations',
    imageUrl: '/images/thermal.jpg',
    publishedAt: '2026-02-03',
    author: 'Thermal Division'
  },
  {
    id: '4',
    title: 'Wind Energy Expansion Plans Approved',
    excerpt: 'Board approves development of three new wind farms in Northern Province.',
    content: 'Full article content here...',
    category: 'Renewable Energy',
    imageUrl: '/images/large_wind.jpg',
    publishedAt: '2026-02-02',
    author: 'Strategic Planning'
  }
];
