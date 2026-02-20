import { AlertCircle, X, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

interface Announcement {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  dismissible?: boolean;
}

interface AnnouncementBannerProps {
  announcements: Announcement[];
}

export default function AnnouncementBanner({ announcements }: AnnouncementBannerProps) {
  const [dismissed, setDismissed] = useState<string[]>([]);

  const getIconAndColors = (type: string) => {
    switch (type) {
      case 'success':
        return {
          icon: CheckCircle,
          bgColor: 'bg-green-50 border-green-200',
          textColor: 'text-green-800',
          iconColor: 'text-green-600',
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          bgColor: 'bg-yellow-50 border-yellow-200',
          textColor: 'text-yellow-800',
          iconColor: 'text-yellow-600',
        };
      case 'error':
        return {
          icon: AlertCircle,
          bgColor: 'bg-red-50 border-red-200',
          textColor: 'text-red-800',
          iconColor: 'text-red-600',
        };
      default:
        return {
          icon: Info,
          bgColor: 'bg-blue-50 border-blue-200',
          textColor: 'text-blue-800',
          iconColor: 'text-blue-600',
        };
    }
  };

  const visibleAnnouncements = announcements.filter(a => !dismissed.includes(a.id));

  if (visibleAnnouncements.length === 0) return null;

  return (
    <div className="space-y-2">
      {visibleAnnouncements.map((announcement) => {
        const { icon: Icon, bgColor, textColor, iconColor } = getIconAndColors(announcement.type);
        
        return (
          <div
            key={announcement.id}
            className={`${bgColor} border rounded-lg p-4 flex items-start justify-between shadow-sm`}
          >
            <div className="flex items-start space-x-3 flex-1">
              <Icon className={`h-5 w-5 ${iconColor} flex-shrink-0 mt-0.5`} />
              <div className="flex-1">
                <h3 className={`font-semibold ${textColor} mb-1`}>{announcement.title}</h3>
                <p className={`text-sm ${textColor}/80`}>{announcement.message}</p>
              </div>
            </div>
            {announcement.dismissible && (
              <button
                onClick={() => setDismissed([...dismissed, announcement.id])}
                className={`${iconColor} hover:opacity-70 transition-opacity ml-4`}
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
