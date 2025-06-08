import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { SkipGrid } from './components/SkipGrid';
import { PreviewPanel } from './components/PreviewPanel';
import { Skip } from './types/Skip';
import { skips } from './data/skips';

function App() {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip(skip);
  };

  const handleContinue = () => {
    console.log('Continuing to next step with skip:', selectedSkip);
    // Here you would typically navigate to the next step
    alert('Continuing to Permit Check step...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentStep={2} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Choose Your Skip Size
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the skip size that best suits your needs. All prices include VAT and 14-day hire period.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Skip Grid */}
          <div className="flex-1">
            <SkipGrid
              skips={skips}
              selectedSkip={selectedSkip}
              onSelectSkip={handleSelectSkip}
            />
          </div>

          {/* Preview Panel */}
          {selectedSkip && (
            <div className="lg:w-80 order-first lg:order-last">
              <PreviewPanel
                selectedSkip={selectedSkip}
                onContinue={handleContinue}
              />
            </div>
          )}
        </div>

        {/* Mobile Continue Button */}
        {selectedSkip && (
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
            <div className="max-w-md mx-auto">
              <button
                onClick={handleContinue}
                className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200 flex items-center justify-center"
              >
                Continue to Permit Check
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;