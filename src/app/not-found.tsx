import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-xl border border-stone-200 p-10">
          <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-light text-slate-800 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-slate-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to calculating school eligibility.
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/" 
              className="block w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Go to Home Page
            </Link>
            
            <div className="text-sm text-slate-500">
              Or try one of these pages:
            </div>
            
            <div className="flex gap-4">
              <Link 
                href="/battery-park" 
                className="flex-1 bg-white border border-stone-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-medium py-3 px-6 rounded-xl transition-all duration-200"
              >
                Battery Park
              </Link>
              
              <Link 
                href="/pine-street" 
                className="flex-1 bg-white border border-stone-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-medium py-3 px-6 rounded-xl transition-all duration-200"
              >
                Pine Street
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 