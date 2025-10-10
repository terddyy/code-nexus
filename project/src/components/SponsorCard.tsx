/**
 * SponsorCard Component
 * @description Displays sponsor/partner information
 */

import { SponsorCardProps } from '../types';

export function SponsorCard({ title, name }: SponsorCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-[#4E56C0]/30 rounded-2xl p-6">
      <p className="text-gray-400 text-sm mb-3">{title}</p>
      <div className="w-full h-24 bg-white/5 border border-[#9B5DE0]/30 rounded-xl flex items-center justify-center">
        {typeof name === 'string' ? (
          <span className="text-lg font-bold text-white">{name}</span>
        ) : (
          name
        )}
      </div>
    </div>
  );
}
