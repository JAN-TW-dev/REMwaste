import React from 'react';
import { Skip } from '../types/Skip';
import { ArrowRight, Truck, Calendar, Shield, AlertCircle } from 'lucide-react';

interface PreviewPanelProps {
  selectedSkip: Skip;
  onContinue: () => void;
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({ selectedSkip, onContinue }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 sticky top-24">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Your Selected Skip</h3>
      
      {/* Selected Skip Summary */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <div>
            <h4 className="font-semibold text-gray-900">{selectedSkip.name}</h4>
            <p className="text-sm text-gray-600">{selectedSkip.hirePeriod}</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-gray-900">£{selectedSkip.priceWithVAT}</span>
            <p className="text-xs text-gray-600">inc. VAT</p>
          </div>
        </div>

        {/* Skip Details */}
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Truck className="w-4 h-4 mr-2 text-gray-400" />
            <span>{selectedSkip.dimensions}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
            <span>{selectedSkip.capacity}</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {selectedSkip.allowedOnRoad && (
            <div className="flex items-center text-sm text-green-700">
              <Shield className="w-4 h-4 mr-2" />
              <span>Permitted for road placement</span>
            </div>
          )}
          {selectedSkip.allowsHeavyWaste && (
            <div className="flex items-center text-sm text-blue-700">
              <AlertCircle className="w-4 h-4 mr-2" />
              <span>Suitable for heavy materials</span>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">{selectedSkip.description}</p>
          
          <button
            onClick={onContinue}
            className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
          >
            Continue to Permit Check
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};