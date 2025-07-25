'use client';

import { CalculationResult } from '@/lib/eligibility';
import AgeBadge from './AgeBadge';
import { format } from 'date-fns';

interface ResultBannerProps {
  result: CalculationResult | null;
  isLoading: boolean;
}

export default function ResultBanner({ result, isLoading }: ResultBannerProps) {
  if (isLoading) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  const { match, flags, isFutureBirth, earliestStartDate, earliestStartGrade } = result;

  if (match) {
    return (
      <div className={`border rounded-3xl p-8 ${
        isFutureBirth 
          ? 'bg-stone-50 border-stone-200' 
          : 'bg-stone-50 border-stone-200'
      }`}>
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isFutureBirth ? 'bg-slate-200' : 'bg-slate-200'
            }`}>
              {isFutureBirth ? (
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <div className="flex-1">
            <h3 className={`text-2xl font-light mb-4 ${
              isFutureBirth ? 'text-slate-800' : 'text-slate-800'
            }`}>
              {isFutureBirth ? 'Projected Eligibility' : 'Eligible'} for {match.grade}
            </h3>
            {isFutureBirth && (
              <div className="mb-4 p-3 bg-slate-100 rounded-xl">
                <p className="text-sm text-slate-800 font-medium">
                  🎯 Planning Ahead: This shows eligibility based on a future birth date.
                </p>
              </div>
            )}
            <AgeBadge 
              age={match.ageOnCutoff} 
              cutoffDate={match.cutoffDate}
              className="mb-4"
            />
            {flags.length > 0 && (
              <div className="mt-6">
                {flags.map((flag, index) => (
                  <p key={index} className={`text-sm mt-2 leading-relaxed ${
                    isFutureBirth ? 'text-slate-700' : 'text-slate-700'
                  }`}>
                    {flag}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`border rounded-3xl p-8 ${
      isFutureBirth 
        ? 'bg-stone-50 border-stone-200' 
        : 'bg-stone-50 border-stone-200'
    }`}>
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isFutureBirth ? 'bg-slate-200' : 'bg-slate-200'
          }`}>
            {isFutureBirth ? (
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            )}
          </div>
        </div>
        <div className="flex-1">
          <h3 className={`text-2xl font-light mb-4 ${
            isFutureBirth ? 'text-slate-800' : 'text-slate-800'
          }`}>
            {isFutureBirth ? 'Projected: Not Eligible' : 'Not Eligible'}
          </h3>
          {isFutureBirth && (
            <div className="mb-4 p-3 bg-slate-100 rounded-xl">
              <p className="text-sm text-slate-800 font-medium">
                📅 Planning Information: This projection is based on a future birth date.
              </p>
            </div>
          )}
          
          {/* Show earliest start date prominently if available */}
          {earliestStartDate && earliestStartGrade && (
            <div className="mb-6 p-4 bg-slate-100 border border-slate-200 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-slate-800">
                  Earliest Possible Start
                </h4>
              </div>
              <p className="text-slate-700 font-medium">
                {format(earliestStartDate, 'MMMM dd, yyyy')}
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Eligible for {earliestStartGrade} starting on this date
              </p>
            </div>
          )}
          
          {flags.length > 0 ? (
            <div className="space-y-3">
              {flags.map((flag, index) => (
                <p key={index} className={`text-sm leading-relaxed ${
                  isFutureBirth ? 'text-slate-700' : 'text-slate-700'
                }`}>
                  {flag}
                </p>
              ))}
            </div>
          ) : (
            <p className={`text-sm leading-relaxed ${
              isFutureBirth ? 'text-slate-700' : 'text-slate-700'
            }`}>
              {isFutureBirth 
                ? 'This child will not meet the age requirements for any grade level at this school in the selected academic year.'
                : 'Child does not meet the age requirements for any grade level at this school.'
              }
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 