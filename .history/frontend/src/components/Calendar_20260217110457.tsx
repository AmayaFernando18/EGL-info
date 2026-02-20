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
          aspect-square flex items-center justify-center rounded-lg text-xs font-medium
          transition-all relative
          ${isToday 
            ? 'bg-primary text-white shadow-md' 
            : eventDay
            ? 'bg-accent/20 text-secondary hover:bg-accent/30'
            : 'text-gray-700 hover:bg-gray-100'
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
    <div className={`bg-surface rounded-xl border border-border shadow-sm p-5 ${className}`}>
      <div className="flex items-center justify-between mb-5 px-3 py-3 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/10">
        <h3 className="text-lg font-bold text-secondary tracking-tight">
          {formatDate(currentDate)}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={previousMonth}
            className="p-1.5 hover:bg-surface rounded-md border border-border transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-secondary" />
          </button>
          <button
            onClick={nextMonth}
            className="p-1.5 hover:bg-surface rounded-md border border-border transition-colors"
          >
            <ChevronRight className="h-4 w-4 text-secondary" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="text-[11px] font-semibold text-gray-500 text-center py-1 uppercase tracking-wide"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days}
      </div>

      <div className="mt-4 pt-4 border-t border-border flex items-center gap-4 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded" />
          <span>Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-accent/20 rounded relative">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
          </div>
          <span>Event Day</span>
        </div>
      </div>
    </div>
  );
}
