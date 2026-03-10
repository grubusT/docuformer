export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded" />
          <span className="font-semibold text-gray-900">DocuFormer</span>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-4">
          <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
            Free Download
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Westpac Home Loan Discharge Authority Form
        </h1>

        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Refinancing or paying off your Westpac home loan? You need to lodge a
          Discharge Authority with Westpac to release the mortgage on your
          property. Download the official form below for free.
        </p>

        {/* Download card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-10 shadow-sm">
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 mb-1">
                Discharge Authority — Home Loan
              </p>
              <p className="text-sm text-gray-500 mb-5">
                Official Westpac form · Fillable PDF · 4 pages
              </p>
              <a
                href="/api/download"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Free
              </a>
            </div>
          </div>
        </div>

        {/* How it works */}
        <h2 className="text-xl font-semibold text-gray-900 mb-5">
          How to use this form
        </h2>
        <ol className="space-y-4 mb-12">
          {[
            {
              step: "1",
              title: "Download the form",
              body: "Click the button above to download the official Westpac Discharge Authority PDF.",
            },
            {
              step: "2",
              title: "Fill it in",
              body: "Open the PDF in Adobe Acrobat or your browser. Fill in your borrower details, loan account number, property address, and settlement date.",
            },
            {
              step: "3",
              title: "Sign and submit",
              body: "All borrowers must sign. Lodge the completed form with Westpac at least 10 business days before your settlement date.",
            },
          ].map(({ step, title, body }) => (
            <li key={step} className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold flex items-center justify-center">
                {step}
              </span>
              <div>
                <p className="font-medium text-gray-900">{title}</p>
                <p className="text-sm text-gray-500 mt-0.5">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-200 pt-6">
          This form is the official Westpac Discharge Authority document provided
          for convenience. DocuFormer is not affiliated with Westpac Banking
          Corporation. Always verify form requirements directly with Westpac or
          your mortgage broker before lodging.
        </p>
      </main>
    </div>
  );
}
