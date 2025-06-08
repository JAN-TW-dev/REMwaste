import React from 'react';
import { Skip } from '../types/Skip';
import { SkipCard } from './SkipCard';

interface SkipGridProps {
  skips: Skip[];
  selectedSkip: Skip | null;
  onSelectSkip: (skip: Skip) => void;
}

export const SkipGrid: React.FC<SkipGridProps> = ({ skips, selectedSkip, onSelectSkip }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          isSelected={selectedSkip?.id === skip.id}
          onSelect={onSelectSkip}
        />
      ))}
    </div>
  );
};