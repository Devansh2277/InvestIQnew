import React, { useState } from 'react';
import { Briefcase, Search, Filter, ArrowUpRight } from 'lucide-react';
import InvestmentCard from './components/InvestmentCard';

const investmentOptions = [
  {
    title: 'S&P 500 Index Fund',
    description: 'Broad market exposure through a low-cost index fund tracking the top 500 US companies.',
    expectedReturn: '8-10% p.a.',
    riskLevel: 'Medium' as const,
    type: 'Index Fund',
    recommendation: 'Strong Buy',
  },
  {
    title: 'Blue-chip SIP',
    description: 'Systematic investment in established, financially sound companies with stable returns.',
    expectedReturn: '12-15% p.a.',
    riskLevel: 'Low' as const,
    type: 'SIP',
    recommendation: 'Buy',
  },
  {
    title: 'Tech Growth Portfolio',
    description: 'Curated selection of high-growth technology companies with strong future potential.',
    expectedReturn: '15-20% p.a.',
    riskLevel: 'High' as const,
    type: 'Stocks',
    recommendation: 'Buy',
  },
  {
    title: 'Dividend Aristocrats',
    description: 'Companies with a track record of increasing dividend payments for 25+ consecutive years.',
    expectedReturn: '6-8% p.a.',
    riskLevel: 'Low' as const,
    type: 'Stocks',
    recommendation: 'Strong Buy',
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRisk, setSelectedRisk] = useState<string>('All');

  const filteredInvestments = investmentOptions.filter(investment => {
    const matchesSearch = investment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = selectedRisk === 'All' || investment.riskLevel === selectedRisk;
    return matchesSearch && matchesRisk;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">InvestWise</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Investment Suggestions</h1>
          <p className="text-gray-600">Discover curated investment opportunities tailored to your risk appetite.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search investments..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={selectedRisk}
            onChange={(e) => setSelectedRisk(e.target.value)}
          >
            <option value="All">All Risk Levels</option>
            <option value="Low">Low Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="High">High Risk</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredInvestments.map((investment, index) => (
            <InvestmentCard key={index} {...investment} />
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <ArrowUpRight className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Pro Tip</h3>
              <p className="text-gray-600">
                Consider diversifying your portfolio across different risk levels and investment types to optimize returns while managing risk.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;