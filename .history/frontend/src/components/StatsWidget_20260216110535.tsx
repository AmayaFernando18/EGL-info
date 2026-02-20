import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface StatsWidgetProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    direction: 'up' | 'down';
    value: string;
    label: string;
  };
  iconColor?: string;
  iconBgColor?: string;
  children?: ReactNode;
}

export default function StatsWidget({
  title,
  value,
  icon: Icon,
  trend,
  iconColor = 'text-primary',
  iconBgColor = 'bg-primary/10',
  children,
}: StatsWidgetProps) {
  return (
    <div className="bg-surface rounded-xl border border-border p-6 shadow-sm hover:shadow-soft transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-secondary">{value}</p>
        </div>
        <div className={`${iconBgColor} p-3 rounded-xl`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>

      {trend && (
        <div className="flex items-center space-x-2">
          <span
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
              trend.direction === 'up'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
          </span>
          <span className="text-xs text-gray-500">{trend.label}</span>
        </div>
      )}

      {children && <div className="mt-4 pt-4 border-t border-border">{children}</div>}
    </div>
  );
}
