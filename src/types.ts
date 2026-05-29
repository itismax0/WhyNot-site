export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'ongoing' | 'planned';
}

export interface Creator {
  name: string;
  role: string;
  telegram: string;
  github?: string;
  tonWallet?: string;
  photoUrl?: string; // We can use generic avatar initials
}

export interface TokenomicsItem {
  name: string;
  percentage: number;
  tokens: string;
  color: string;
  description: string;
}
