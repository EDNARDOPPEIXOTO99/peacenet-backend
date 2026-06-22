export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  password_hash: string;
  bio?: string;
  avatar_url?: string;
  country?: string;
  role?: 'CITIZEN' | 'GOV' | 'NGO' | 'ORG';
  peace_score?: number;
  created_at?: Date;
}