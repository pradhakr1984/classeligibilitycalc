'use client';

import { format } from 'date-fns';

interface AgeBadgeProps {
  age: number;
  cutoffDate: Date;
  className?: string;
}

export default function AgeBadge({ age, cutoffDate, className = '' }: AgeBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-3 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-base font-medium border border-slate-200 ${className}`}>
      <span className="font-semibold">{age} years old</span>
      <span className="text-slate-400">•</span>
      <span className="text-slate-600">
        on {format(cutoffDate, 'MMM d, yyyy')}
      </span>
    </div>
  );
} 