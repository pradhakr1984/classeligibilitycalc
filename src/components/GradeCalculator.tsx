'use client';

import { useState } from 'react';
import { School, getEligibility, getCurrentAcademicYear } from '@/lib/eligibility';
import ResultBanner from './ResultBanner';

interface GradeCalculatorProps {
  school: School;
  schoolName: string;
}

export default function GradeCalculator({ school, schoolName }: GradeCalculatorProps) {
  const [birthDate, setBirthDate] = useState('');
  const [entryYear, setEntryYear] = useState(2025); // Default to 2025-2026 academic year
  const [result, setResult] = useState<import('@/lib/eligibility').CalculationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculate = () => {
    if (!birthDate) return;

    setIsLoading(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      const calculationResult = getEligibility(birthDate, entryYear, school);
      setResult(calculationResult);
      setIsLoading(false);
    }, 300);
  };

  const currentYear = getCurrentAcademicYear();
  // Ensure 2025-2026 is always included, plus current year and future years
  const yearOptions = [2025, ...Array.from({ length: 10 }, (_, i) => currentYear + i)].filter((year, index, arr) => arr.indexOf(year) === index).sort();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-stone-200 p-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-light text-slate-800 mb-4">
            Eligibility Calculator
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Enter your child&apos;s birth date to determine their eligibility for the {schoolName}
          </p>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); handleCalculate(); }} className="space-y-8">
          <div>
            <label htmlFor="birthDate" className="block text-lg font-medium text-slate-700 mb-3">
              Child&apos;s Birth Date *
            </label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
              className="w-full px-6 py-4 border border-stone-300 rounded-2xl focus:ring-2 focus:ring-slate-600 focus:border-slate-600 transition-colors text-lg"
            />
            <p className="mt-2 text-sm text-slate-500">
              💡 You can enter any birth date (past or future) to calculate eligibility for planning purposes.
            </p>
          </div>

          <div>
            <label htmlFor="entryYear" className="block text-lg font-medium text-slate-700 mb-3">
              Academic Year
            </label>
            <select
              id="entryYear"
              value={entryYear}
              onChange={(e) => setEntryYear(Number(e.target.value))}
              className="w-full px-6 py-4 border border-stone-300 rounded-2xl focus:ring-2 focus:ring-slate-600 focus:border-slate-600 transition-colors text-lg"
            >
              {yearOptions.map(year => (
                <option key={year} value={year}>
                  {year} - {year + 1} Academic Year
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={!birthDate}
            className="w-full bg-slate-800 hover:bg-slate-900 disabled:bg-stone-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          >
            Calculate Eligibility
          </button>
        </form>
      </div>

      <div className="mt-8">
        <ResultBanner result={result} isLoading={isLoading} />
      </div>
    </div>
  );
} 