import React from 'react';
import { ArrowUpRight, TrendingUp, AlertCircle } from 'lucide-react';

interface InvestmentCardProps {
  title: string;
  description: string;
  expectedReturn: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  type: string;
  recommendation: string;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({
  title,
  description,
  expectedReturn,
  riskLevel,
  type,
  recommendation,
}) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(riskLevel)}`}>
          {riskLevel} Risk
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <TrendingUp size={16} />
            Expected Return
          </div>
          <div className="text-lg font-semibold text-gray-800">{expectedReturn}</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <AlertCircle size={16} />
            Type
          </div>
          <div className="text-lg font-semibold text-gray-800">{type}</div>
        </div>
      </div>
      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">Recommendation</span>
          <span className="text-sm font-semibold text-blue-600">{recommendation}</span>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;