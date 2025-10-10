/**
 * Type definitions for CodeNexus Esports League
 * @fileoverview Central type definitions for the application
 */

export interface PrizeCardProps {
  place: string;
  amount: string;
  color: string;
}

export interface SponsorCardProps {
  title: string;
  name: React.ReactNode;
}

export interface ExternalLinkFormProps {
  title: string;
  description: string;
  href: string;
}

export interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export type EventDate = {
  start: string;
  end: string;
  timeRange: string;
};

export type SocialLinks = {
  facebook: string;
  email: string;
  website?: string;
};
