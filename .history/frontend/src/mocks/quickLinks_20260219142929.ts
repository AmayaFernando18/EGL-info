import type { QuickLinkDto } from '../types';

export const mockQuickLinks: QuickLinkDto[] = [
  {
    id: '1',
    title: 'Generation Dashboard',
    description: 'Real-time power generation monitoring',
    url: '/generation',
    icon: 'Zap',
    category: 'Operations'
  },
  {
    id: '2',
    title: 'Plant Performance',
    description: 'View plant efficiency metrics',
    url: '/performance',
    icon: 'ChartBarIcon',
    category: 'Analytics'
  },
  {
    id: '3',
    title: 'Maintenance Portal',
    description: 'Schedule and track maintenance',
    url: '/maintenance',
    icon: 'Cog6ToothIcon',
    category: 'Operations'
  },
  {
    id: '4',
    title: 'Safety Guidelines',
    description: 'Access safety protocols',
    url: '/safety',
    icon: 'ShieldCheckIcon',
    category: 'Safety'
  },
  {
    id: '5',
    title: 'Employee Portal',
    description: 'HR and personnel services',
    url: '/employee',
    icon: 'UserIcon',
    category: 'HR'
  },
  {
    id: '6',
    title: 'Training Center',
    description: 'Online courses and certifications',
    url: '/training',
    icon: 'AcademicCapIcon',
    category: 'Learning'
  },
  {
    id: '7',
    title: 'Document Library',
    description: 'Technical documents and manuals',
    url: '/documents',
    icon: 'DocumentTextIcon',
    category: 'Resources'
  },
  {
    id: '8',
    title: 'Environmental Reports',
    description: 'Sustainability and compliance',
    url: '/environment',
    icon: 'GlobeAltIcon',
    category: 'Environment'
  },
  {
    id: '9',
    title: 'Staff Mail',
    description: 'Access your corporate email',
    url: '/mail',
    icon: 'Mail',
    category: 'Communication'
  },
  {
    id: '10',
    title: 'Find a Circular',
    description: 'Search company circulars',
    url: '/circulars',
    icon: 'FileText',
    category: 'Resources'
  },
  {
    id: '11',
    title: 'Circuit Bunglow Reservation',
    description: 'Book circuit bungalows',
    url: '/bungalow',
    icon: 'Home',
    category: 'Facilities'
  },
  {
    id: '12',
    title: 'Employee Search',
    description: 'Find colleagues and contacts',
    url: '/employee-search',
    icon: 'Users',
    category: 'Directory'
  }
];
