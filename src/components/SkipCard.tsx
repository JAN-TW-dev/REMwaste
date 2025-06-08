import React from 'react';
import { Skip } from '../types/Skip';
import { Truck, Shield, AlertCircle } from 'lucide-react';

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
}

export const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-md border-2 transition-all duration-300 hover:shadow-lg cursor-pointer h-full flex flex-col
        ${isSelected ? 'border-yellow-400 ring-2 ring-yellow-100' : 'border-gray-200 hover:border-gray-300'}
      `}
      onClick={() => onSelect(skip)}
    >
      {/* Skip Image */}
      <div className="relative p-6 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="absolute top-4 right-4">
          <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
            {skip.yards} Yards
          </span>
        </div>
        
        {/* Skip Visual Representation */}
        <div className="flex justify-center items-end h-32">
          <div 
            className="bg-yellow-400 border-2 border-yellow-500 rounded-t-lg shadow-lg"
            style={{
              width: `${Math.min(skip.yards * 12, 120)}px`,
              height: `${Math.min(skip.yards * 8, 80)}px`,
              position: 'relative'
            }}
          >
            {/* Skip branding */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Truck className="w-6 h-6 text-gray-800" />
            </div>
            
            {/* Skip base */}
            <div 
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-yellow-500 rounded-b"
              style={{ width: '80%', height: '8px' }}
            />
          </div>
        </div>
      </div>

      {/* Skip Details - Flex grow to push button to bottom */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{skip.name}</h3>
        <p className="text-gray-600 mb-3">{skip.hirePeriod}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium">Dimensions:</span>
            <span className="ml-2">{skip.dimensions}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium">Capacity:</span>
            <span className="ml-2">{skip.capacity}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skip.allowedOnRoad && (
            <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
              <Shield className="w-3 h-3 mr-1" />
              Road Legal
            </div>
          )}
          {skip.allowsHeavyWaste && (
            <div className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              <AlertCircle className="w-3 h-3 mr-1" />
              Heavy Waste OK
            </div>
          )}
        </div>

        {/* Description - Fixed height to ensure consistency */}
        <p className="text-sm text-gray-600 mb-4 flex-grow min-h-[2.5rem]">{skip.description}</p>

        {/* Price and Button Section - Always at bottom */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-2xl font-bold text-gray-900">£{skip.priceWithVAT}</span>
              <span className="text-sm text-gray-600 ml-1">inc. VAT</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className={`
              w-full py-3 px-4 rounded-lg font-medium transition-all duration-200
              ${isSelected
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
              }
            `}
          >
            {isSelected ? 'Selected' : 'Select This Skip'}
          </button>
        </div>
      </div>
    </div>
  );
};