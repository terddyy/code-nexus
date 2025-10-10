/**
 * ExternalLinkForm Component
 * @description Clickable card linking to external forms
 */

import { ExternalLink } from 'lucide-react';
import { ExternalLinkFormProps } from '../types';

export function ExternalLinkForm({ title, description, href }: ExternalLinkFormProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#FDCFFA] transition-all duration-300 h-full"
      aria-label={title}
    >
      <div className="flex items-center gap-4 mb-3">
        <ExternalLink className="w-6 h-6 text-[#FDCFFA]" aria-hidden="true" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </a>
  );
}
