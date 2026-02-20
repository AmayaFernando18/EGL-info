import { Award, Star, TrendingUp } from 'lucide-react';
import Card from './Card';

interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  imageUrl?: string;
  achievement: string;
  description: string;
}

interface EmployeeSpotlightProps {
  employees: Employee[];
}

export default function EmployeeSpotlight({ employees }: EmployeeSpotlightProps) {
  if (employees.length === 0) return null;

  const featured = employees[0];

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <div className="flex items-start space-x-2 mb-4">
        <Award className="h-5 w-5 text-accent" />
        <h2 className="text-xl font-bold text-secondary">Employee Spotlight</h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-shrink-0">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
            <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
              {featured.imageUrl ? (
                <img
                  src={featured.imageUrl}
                  alt={featured.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-3xl font-bold text-primary">
                  {featured.name.split(' ').map(n => n[0]).join('')}
                </span>
              )}
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-accent rounded-full p-1.5 shadow-lg">
            <Star className="h-4 w-4 text-white fill-current" />
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-xl font-bold text-secondary mb-1">{featured.name}</h3>
          <p className="text-sm text-primary font-medium mb-1">{featured.position}</p>
          <p className="text-xs text-gray-500 mb-3">{featured.department}</p>

          <div className="bg-accent/10 rounded-lg p-3 mb-3">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-secondary">{featured.achievement}</span>
            </div>
            <p className="text-xs text-gray-700">{featured.description}</p>
          </div>

          <div className="flex items-center justify-center sm:justify-start space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-accent fill-current" />
            ))}
          </div>
        </div>
      </div>

      {employees.length > 1 && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-gray-500 text-center">
            And {employees.length - 1} more outstanding employee{employees.length > 2 ? 's' : ''} this month
          </p>
        </div>
      )}
    </Card>
  );
}
