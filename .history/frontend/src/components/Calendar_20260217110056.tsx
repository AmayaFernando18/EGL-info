import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface CalendarProps {
  events?: Array<{ date: string; title: string }>;
  onDateClick?: (date: Date) => void;
  className?: string;
}

export default function Calendar({ events = [], onDateClick, className = '' }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const today = new Date();
  const isCurrentMonth = 
    currentDate.getMonth() === today.getMonth() && 
    currentDate.getFullYear() === today.getFullYear();

  const hasEvent = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.some(event => event.date === dateStr);
  };

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="aspect-square" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = isCurrentMonth && day === today.getDate();
    const eventDay = hasEvent(day);
    
    days.push(
      <button
        key={day}
        onClick={() => onDateClick?.(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
        className={`
          aspect-square flex items-center justify-center rounded-lg text-xs font-semibold
          transition-all relative border
          ${isToday 
            ? 'bg-primary text-white border-primary shadow-md shadow-primary/30' 
            : eventDay
            ? 'bg-accent/15 text-secondary border-accent/30 hover:bg-accent/25 hover:border-accent/50'
            : 'text-gray-700 border-transparent hover:bg-primary/5 hover:border-primary/20'
          }
        `}
      >
        {day}
        {eventDay && !isToday && (
          <span className="absolute bottom-1 w-1 h-1 bg-primary rounded-full" />
        )}
      </button>
    );
  }

  return (
    <div className={`bg-surface rounded-2xl border border-primary/10 shadow-soft p-6 h-full flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl px-4 py-3 border border-primary/10">
        <div>
          <h3 className="text-lg font-bold text-secondary leading-tight">{formatDate(currentDate)}</h3>
          <p className="text-xs text-gray-600 mt-0.5">Monthly Schedule Overview</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={previousMonth}
            className="p-1.5 bg-white/80 hover:bg-white rounded-lg transition-colors border border-primary/10"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>
          <button
            onClick={nextMonth}
            className="p-1.5 bg-white/80 hover:bg-white rounded-lg transition-colors border border-primary/10"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="text-[11px] font-semibold text-secondary/70 text-center py-2 bg-primary/5 rounded-md"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 flex-1">
        {days}
      </div>

      {/* Legend */}
      <div className="mt-5 pt-4 border-t border-primary/10 flex items-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-md" />
          <span>Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-accent/20 rounded-md relative">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
          </div>
          <span>Has Events</span>
        </div>
      </div>
    </div>
  );
}
