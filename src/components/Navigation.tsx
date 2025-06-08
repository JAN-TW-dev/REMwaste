import React from 'react';
import { Check } from 'lucide-react';

interface NavigationProps {
  currentStep: number;
}

const steps = [
  'Postcode',
  'Waste Type',
  'Select Skip',
  'Permit Check',
  'Choose Date',
  'Payment'
];

export const Navigation: React.FC<NavigationProps> = ({ currentStep }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4">
          <div className="flex items-center space-x-2 sm:space-x-8 overflow-x-auto">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center whitespace-nowrap">
                <div className="flex items-center">
                  <div
                    className={`
                      flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
                      ${index < currentStep 
                        ? 'bg-green-500 text-white' 
                        : index === currentStep 
                        ? 'bg-yellow-400 text-gray-900' 
                        : 'bg-gray-200 text-gray-500'
                      }
                    `}
                  >
                    {index < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={`
                      ml-2 text-sm font-medium
                      ${index <= currentStep ? 'text-gray-900' : 'text-gray-500'}
                    `}
                  >
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden sm:block ml-4 w-8 h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};