import { useState } from 'react';
import { mockNews } from '../mocks/news';
import { mockQuickLinks } from '../mocks/quickLinks';
import { mockEvents } from '../mocks/events';
import { mockHighlights } from '../mocks/highlights';
import { mockHeroImages } from '../mocks/heroImages';
import { mockActivities } from '../mocks/activities';
import { mockEmployeeSpotlight } from '../mocks/employees';
import { mockAnnouncements } from '../mocks/announcements';
import Card from '../components/Card';
import StatsWidget from '../components/StatsWidget';
import ActivityFeed from '../components/ActivityFeed';
import EmployeeSpotlight from '../components/EmployeeSpotlight';
import AnnouncementBanner from '../components/AnnouncementBanner';
import { Calendar, FileText, Zap, ArrowRight, TrendingUp, TrendingDown, ChevronLeft, ChevronRight, Users, Target, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import {
  GlobeAltIcon,
  CalculatorIcon,
  DocumentTextIcon,
  UserIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const iconMap: Record<string, any> = {
  Zap,
  GlobeAltIcon,
  CalculatorIcon,
  DocumentTextIcon,
  UserIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  LightBulbIcon,
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { user } = useUser();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockHeroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockHeroImages.length) % mockHeroImages.length);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="min-h-screen bg-base">
      {/* Hero Carousel */}
      <div className="relative h-[450px] bg-gradient-to-r from-primary to-accent overflow-hidden">
        {mockHeroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.imageUrl}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-primary/80 to-transparent flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-4">
                    <span className="text-white text-sm font-semibold">EGL Updates</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                    {image.title}
                  </h1>
                  <p className="text-xl text-gray-100 mb-6">{image.description}</p>
                  <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {mockHeroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section & Announcements */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 mb-6 border border-primary/10">
            <h2 className="text-3xl font-bold text-secondary mb-2">
              {getGreeting()}, {user?.name}! 👋
            </h2>
            <p className="text-gray-600">
              Welcome to the EGL Intranet Portal. Here's what's happening today.
            </p>
          </div>
          
          <AnnouncementBanner announcements={mockAnnouncements} />
        </div>

        {/* Key Performance Metrics */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center">
            <Target className="h-6 w-6 text-primary mr-2" />
            Performance Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockHighlights.map((highlight) => {
              const Icon = iconMap[highlight.icon] || Zap;
              return (
                <StatsWidget
                  key={highlight.id}
                  title={highlight.title}
                  value={highlight.value}
                  icon={Icon}
                  trend={
                    highlight.trend
                      ? {
                          direction: highlight.trend,
                          value: highlight.trendValue || '',
                          label: highlight.description,
                        }
                      : undefined
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Employee Spotlight */}
        <div className="mb-10">
          <EmployeeSpotlight employees={mockEmployeeSpotlight} />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* News Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Latest News */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-secondary flex items-center">
                  <FileText className="h-6 w-6 text-primary mr-2" />
                  Latest News & Announcements
                </h2>
                <Link to="/news" className="text-primary hover:text-accent flex items-center text-sm font-semibold group">
                  View All 
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="space-y-4">
                {mockNews.slice(0, 3).map((news) => (
                  <Card key={news.id} hover>
                    <div className="flex gap-4">
                      {news.imageUrl && (
                        <img
                          src={news.imageUrl}
                          alt={news.title}
                          className="w-40 h-28 object-cover rounded-lg flex-shrink-0"
                        />
                      )}
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                          {news.category}
                        </span>
                        <h3 className="font-bold text-secondary mb-2 hover:text-primary transition-colors line-clamp-2">
                          {news.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{news.excerpt}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <span className="font-medium">{news.author}</span>
                          <span className="mx-2">•</span>
                          <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div>
              <h2 className="text-xl font-bold text-secondary flex items-center mb-4">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                Upcoming Events
              </h2>
              <Card>
                <div className="space-y-4">
                  {mockEvents.slice(0, 4).map((event) => (
                    <div key={event.id} className="border-l-4 border-primary pl-4 hover:border-accent transition-colors">
                      <h4 className="font-semibold text-sm text-secondary mb-1">{event.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">{event.location}</p>
                      <p className="text-xs text-primary font-semibold">
                        {new Date(event.eventDate).toLocaleDateString()} {event.eventTime && `• ${event.eventTime}`}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/calendar"
                  className="mt-4 block text-center text-primary hover:text-accent text-sm font-semibold py-2 hover:bg-primary/5 rounded-lg transition-colors"
                >
                  View Full Calendar →
                </Link>
              </Card>
            </div>

            {/* Activity Feed */}
            <ActivityFeed activities={mockActivities} maxItems={6} />
          </div>
        </div>

        {/* Departments & Quick Links */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-secondary flex items-center">
              <Briefcase className="h-6 w-6 text-primary mr-2" />
              Departments & Resources
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockQuickLinks.slice(0, 12).map((link) => {
              const Icon = iconMap[link.icon] || Zap;
              return (
                <Card key={link.id} hover className="text-center group">
                  <Link to={link.url} className="block">
                    <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-sm">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm text-secondary mb-1 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{link.description}</p>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
