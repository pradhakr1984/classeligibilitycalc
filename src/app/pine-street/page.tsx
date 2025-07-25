import Link from 'next/link';
import GradeCalculator from '@/components/GradeCalculator';

export default function PineStreetPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 leading-tight">
              Pine Street School
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Traditional school with August 31st cut-off dates for all grade levels. 
              Comprehensive education from early childhood through middle school.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <GradeCalculator school="PSS" schoolName="Pine Street School" />
        </div>
      </div>

      {/* Info Section */}
      <div className="py-20 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-800 mb-4">
              Grade Requirements
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Understanding the age requirements for each program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="text-center">
                <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-semibold text-slate-700">1s</span>
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">Nursery Ones</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ≥ 1 year + 1 day on first day
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="text-center">
                <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-semibold text-slate-700">2s-4s</span>
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">Nursery</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Turns appropriate age on/before Aug 31
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="text-center">
                <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-semibold text-slate-700">K</span>
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">Kindergarten</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Turns 5 on/before Aug 31
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200">
              <div className="text-center">
                <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-semibold text-slate-700">1-8</span>
                </div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">Elementary</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Age progresses 1 year per grade, Aug 31 cut-off
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
            Built to help parents navigate school enrollment decisions with confidence.
          </p>
        </div>
      </div>
    </div>
  );
} 