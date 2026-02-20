import type { EventDto } from '../types';

export const mockEvents: EventDto[] = [
  {
    id: '1',
    title: 'Renewable Energy Innovation Summit',
    description: 'Annual conference featuring latest developments in renewable energy technologies.',
    eventDate: '2026-02-15',
    eventTime: '09:00 AM',
    location: 'EGL Head Office Auditorium',
    category: 'Conference'
  },
  {
    id: '2',
    title: 'Safety Training Workshop',
    description: 'Mandatory safety training for all thermal plant operators.',
    eventDate: '2026-02-18',
    eventTime: '02:00 PM',
    location: 'Kelanitissa Power Station',
    category: 'Training'
  },
  {
    id: '3',
    title: 'Environmental Impact Assessment Review',
    description: 'Quarterly review of environmental compliance across all facilities.',
    eventDate: '2026-02-20',
    eventTime: '10:00 AM',
    location: 'Virtual Meeting',
    category: 'Meeting'
  },
  {
    id: '4',
    title: 'Employee Wellness Day',
    description: 'Health screening and wellness activities for all staff.',
    eventDate: '2026-02-25',
    eventTime: '08:00 AM',
    location: 'All EGL Facilities',
    category: 'Wellness'
  },
  {
    id: '5',
    title: 'Wind Farm Site Visit',
    description: 'Technical team visit to proposed wind farm locations.',
    eventDate: '2026-03-01',
    eventTime: '07:00 AM',
    location: 'Mannar District',
    category: 'Site Visit'
  }
];
