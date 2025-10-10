/**
 * PrizeCard Component
 * @description Displays individual prize information with styling
 */

import { Trophy } from 'lucide-react';
import { PrizeCardProps } from '../types';

export function PrizeCard({ place, amount, color }: PrizeCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#9B5DE0] transition-all duration-300 hover:scale-105">
      <div className="text-center">
        <div 
          className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center" 
          style={{ 
            backgroundColor: `${color}20`, 
            border: `2px solid ${color}` 
          }}
        >
          <Trophy className="w-8 h-8" style={{ color }} />
        </div>
        <div className="text-gray-400 text-sm font-semibold mb-2">{place} PLACE</div>
        <div className="text-3xl font-black text-white">₱{amount}</div>
      </div>
    </div>
  );
}
