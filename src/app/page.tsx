import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-stone-100 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 leading-tight">
              School Entry Grade
              <span className="block font-semibold text-slate-900">Calculator</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover which grade or program your child is eligible for at Battery Park Montessori or Pine Street School. 
              Enter your child&apos;s birth date and academic year to get instant results.
            </p>
          </div>
        </div>
      </div>

      {/* School Selection Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-800 mb-4">
              Choose Your School
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select a school to begin calculating your child&apos;s eligibility
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Battery Park Montessori */}
            <Link href="/battery-park" className="group">
              <div className="bg-white border border-stone-200 rounded-3xl p-10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer group-hover:border-slate-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-light text-slate-800 mb-4">
                    Battery Park Montessori
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    New York City&apos;s only Montessori school offering a fully immersive Spanish and Mandarin experience. 
                    Rolling admissions with December 31st cut-off dates for most programs.
                  </p>
                  <div className="inline-flex items-center text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                    Calculate Eligibility
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Pine Street School */}
            <Link href="/pine-street" className="group">
              <div className="bg-white border border-stone-200 rounded-3xl p-10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer group-hover:border-slate-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-light text-slate-800 mb-4">
                    Pine Street School
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Traditional school with August 31st cut-off dates for all grade levels. 
                    Comprehensive education from early childhood through middle school.
                  </p>
                  <div className="inline-flex items-center text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                    Calculate Eligibility
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-slate-800 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Simple steps to determine your child&apos;s eligibility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-semibold text-slate-700">1</span>
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3">Select a School</h3>
              <p className="text-slate-600">Choose between Battery Park Montessori or Pine Street School</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-semibold text-slate-700">2</span>
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3">Enter Details</h3>
              <p className="text-slate-600">Input your child&apos;s birth date and desired academic year</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-semibold text-slate-700">3</span>
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3">Get Results</h3>
              <p className="text-slate-600">See eligibility, age on cutoff date, and recommendations</p>
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
