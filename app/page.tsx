import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-lg shadow-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Sales Analytics
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Welcome to your interactive sales dashboard
            </p>
            <p className="text-gray-500">
              Analyze sales data, filter by threshold, and visualize trends
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <span className="text-xl">📊</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Multiple Chart Types
                </h3>
                <p className="text-gray-600">
                  Switch between bar, line, and pie charts
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  <span className="text-xl">🎯</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Custom Filtering
                </h3>
                <p className="text-gray-600">
                  Set your own sales threshold to filter data
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <span className="text-xl">📈</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Year Comparison
                </h3>
                <p className="text-gray-600">
                  View and compare data from 2022, 2023, and 2024
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Features
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Real-time data
                visualization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Interactive filters
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Responsive design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Beautiful UI with
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Atomic component
                structure
              </li>
            </ul>
          </div>

          <Link
            href="/dashboard"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-200"
          >
            View Dashboard →
          </Link>

          <p className="text-center text-gray-500 text-sm mt-6">
            Built with Next.js 15, TypeScript, Tailwind CSS, and Recharts
          </p>
        </div>
      </div>
    </div>
  );
}
