import { useState } from 'react';
import { mockEvents } from '../mocks/events';
import Card from '../components/Card';
import { Calendar as CalendarIcon, MapPin, Clock, ChevronLeft, ChevronRight, Users, Filter } from 'lucide-react';

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('All');

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const categories = ['All', ...Array.from(new Set(mockEvents.map(e => e.category)))];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return mockEvents.filter(event => event.eventDate === dateStr);
  };

  const filteredEvents = selectedCategory === 'All' 
    ? mockEvents 
    : mockEvents.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-base">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-accent text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Event Calendar</h1>
          <p className="text-gray-100 text-lg">Stay informed about upcoming company events and meetings</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <h2 className="text-2xl font-bold text-secondary flex items-center">
                  <CalendarIcon className="h-6 w-6 text-primary mr-2" />
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={prevMonth}
                    className="p-2 hover:bg-primary/10 rounded-lg transition-colors border border-border"
                  >
                    <ChevronLeft className="h-5 w-5 text-secondary" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-primary/10 rounded-lg transition-colors border border-border"
                  >
                    <ChevronRight className="h-5 w-5 text-secondary" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-xs font-bold text-primary py-3 bg-primary/5 rounded">
                    {day}
                  </div>
                ))}
                
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const events = getEventsForDate(day);
                  const isToday = new Date().getDate() === day &&
                                 new Date().getMonth() === currentMonth.getMonth() &&
                                 new Date().getFullYear() === currentMonth.getFullYear();
                  
                  return (
                    <div
                      key={day}
                      className={`aspect-square border-2 rounded-lg p-2 transition-all ${
                        isToday 
                          ? 'border-accent bg-accent/10 shadow-md' 
                          : 'border-border hover:border-primary hover:shadow-sm'
                      } ${events.length > 0 ? 'bg-primary/5' : 'bg-white'} cursor-pointer`}
                    >
                      <div className={`text-sm font-bold mb-1 ${isToday ? 'text-accent' : 'text-secondary'}`}>
                        {day}
                      </div>
                      {events.length > 0 && (
                        <div className="space-y-0.5">
                          {events.slice(0, 2).map(event => (
                            <div
                              key={event.id}
                              className="text-[10px] bg-primary text-white px-1.5 py-0.5 rounded truncate font-medium"
                              title={event.title}
                            >
                              {event.title}
                            </div>
                          ))}
                          {events.length > 2 && (
                            <div className="text-[9px] text-gray-600 font-medium px-1">
                              +{events.length - 2} more
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Upcoming Events List */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-secondary mb-4 flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                Upcoming Events
              </h2>
              
              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none appearance-none bg-white text-sm"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {filteredEvents.slice(0, 8).map((event) => (
                <Card key={event.id} hover className="border-l-4 border-l-primary">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2.5 rounded-lg flex-shrink-0">
                      <CalendarIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-secondary mb-2">{event.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3.5 w-3.5 mr-2 text-primary" />
                          <span className="font-medium">
                            {new Date(event.eventDate).toLocaleDateString('en-US', { 
                              month: 'long', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                            {event.eventTime && ` • ${event.eventTime}`}
                          </span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="h-3.5 w-3.5 mr-2 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <span className="inline-block mt-3 px-2.5 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
