/**
 * Application Constants
 * @fileoverview Centralized configuration and constant values
 */

export const BRAND_COLORS = {
  primary: '#9B5DE0',
  secondary: '#D78FEE',
  accent: '#FDCFFA',
  dark: '#4E56C0',
} as const;

export const EVENT_INFO = {
  name: 'Code Nexus Esports League',
  season: 'SEASON 4',
  tagline: 'A METAfied Season is Here!',
  dates: 'November 19-21, 2025',
  time: '10:00 AM - 7:00 PM',
} as const;

export const PRIZE_POOL = {
  champion: '5,000',
  first: '3,500',
  second: '2,000',
  third: '1,000',
  fourth: '500',
} as const;

export const EXTERNAL_LINKS = {
  registration: 'https://tinyurl.com/registerolopscmlt2025',
  information: 'https://tinyurl.com/infoolopscmlt2025',
  tshirt: 'https://tinyurl.com/tshirtolopscmlt2025',
  raffle: 'https://tinyurl.com/raffleolopscmlt2025',
  partnership: 'https://tinyurl.com/spolopscmlt2025',
  facebook: 'https://www.facebook.com/olopscmlt',
  tncGroup: 'https://www.facebook.com/TNCGroupPH',
  email: 'mailto:olopscmlt@gmail.com',
  partnershipEmail: 'mailto:olopscmlt.mktg@gmail.com',
} as const;

export const SOCIAL_HASHTAGS = [
  '#IamTHEGame',
  '#CodeNexusLeague',
  '#OLOPSCMLT2025',
  '#TNC',
] as const;

export const ASSETS = {
  logo: '/image/codenexus_logo.png',
  tncLogo: '/image/tnc_logo.png',
} as const;
