import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';

export default function BatteryParkPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <div className="bg-white border-b border-stone-200 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to School Selection
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-100 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 leading-tight">
              Battery Park Montessori
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              New York City&apos;s only Montessori school offering a fully immersive Spanish and Mandarin experience. 
              Rolling admissions with December 31st cut-off dates for most programs.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <GradeCalculator school="BPM" schoolName="Battery Park Montessori" />
        </div>
      </div>

      {/* Info Section */}
      <div className="py-20 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-800 mb-4">
              Grade Requirements
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Understanding the age requirements for each program
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-stone-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-semibold text-slate-700">1s</span>
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-3">Nursery Ones</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ≥ 1 year + 1 day on first day of attendance
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-semibold text-slate-700">2s</span>
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-3">Nursery Twos</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Turns 2 on/before Dec 31 of entry year
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-semibold text-slate-700">3-5</span>
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-3">Casa (3-5)</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Turns 3-5 on/before Dec 31 of entry year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400">
            Based on information from <a href="https://www.batteryparkmontessori.com/" className="text-slate-300 hover:text-slate-200 underline" target="_blank" rel="noopener noreferrer">Battery Park Montessori</a>
          </p>
        </div>
      </div>
    </div>
  );
} 