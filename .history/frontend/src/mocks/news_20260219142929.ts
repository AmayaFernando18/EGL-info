import type { NewsDto } from '../types';

export const mockNews: NewsDto[] = [
  {
    id: '1',
    title: 'New Solar Farm Project Launched in Hambantota',
    excerpt: 'EGL unveils ambitious 100MW solar power facility to enhance renewable energy capacity.',
    content: 'Full article content here...',
    category: 'Renewable Energy',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
    publishedAt: '2026-02-05',
    author: 'Renewable Energy Division'
  },
  {
    id: '2',
    title: 'Hydro Power Generation Reaches Record Levels',
    excerpt: 'Unprecedented rainfall leads to optimal reservoir levels across all major hydro plants.',
    content: 'Full article content here...',
    category: 'Hydropower',
    imageUrl: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=800',
    publishedAt: '2026-02-04',
    author: 'Hydro Operations Team'
  },
  {
    id: '3',
    title: 'Annual Maintenance Schedule for Thermal Plants',
    excerpt: 'Planned maintenance activities for Q1 2026 announced for all thermal generation facilities.',
    content: 'Full article content here...',
    category: 'Operations',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    publishedAt: '2026-02-03',
    author: 'Thermal Division'
  },
  {
    id: '4',
    title: 'Wind Energy Expansion Plans Approved',
    excerpt: 'Board approves development of three new wind farms in Northern Province.',
    content: 'Full article content here...',
    category: 'Renewable Energy',
    imageUrl: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800',
    publishedAt: '2026-02-02',
    author: 'Strategic Planning'
  }
];
