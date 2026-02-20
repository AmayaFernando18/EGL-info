import { Clock, UserPlus, FileText, Calendar, Award, Zap } from 'lucide-react';
import Card from './Card';

interface Activity {
  id: string;
  type: 'user' | 'document' | 'event' | 'achievement' | 'system';
  title: string;
  description: string;
  timestamp: string;
  user?: string;
}

interface ActivityFeedProps {
  activities: Activity[];
  maxItems?: number;
}

export default function ActivityFeed({ activities, maxItems = 10 }: ActivityFeedProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user':
        return UserPlus;
      case 'document':
        return FileText;
      case 'event':
        return Calendar;
      case 'achievement':
        return Award;
      default:
        return Zap;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'user':
        return 'bg-blue-500/10 text-blue-600';
      case 'document':
        return 'bg-purple-500/10 text-purple-600';
      case 'event':
        return 'bg-primary/10 text-primary';
      case 'achievement':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-gray-500/10 text-gray-600';
    }
  };

  const getRelativeTime = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - time.getTime()) / (1000 * 60));

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return time.toLocaleDateString();
  };

  const displayActivities = activities.slice(0, maxItems);

  return (
    <Card>
      <h2 className="text-xl font-bold text-secondary mb-6 flex items-center">
        <Zap className="h-5 w-5 text-primary mr-2" />
        Recent Activity
      </h2>
      <div className="space-y-4">
        {displayActivities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          const colorClass = getActivityColor(activity.type);

          return (
            <div key={activity.id} className="flex items-start space-x-3 pb-4 border-b border-border last:border-0 last:pb-0">
              <div className={`${colorClass} p-2 rounded-lg flex-shrink-0`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-secondary">{activity.title}</p>
                <p className="text-xs text-gray-600 mt-1">{activity.description}</p>
                {activity.user && (
                  <p className="text-xs text-gray-500 mt-1">by {activity.user}</p>
                )}
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  {getRelativeTime(activity.timestamp)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {activities.length > maxItems && (
        <button className="mt-4 text-sm text-primary hover:text-accent font-medium w-full text-center">
          View all activities →
        </button>
      )}
    </Card>
  );
}
