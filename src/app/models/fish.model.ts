import { Team } from './team.model';
import { Inspector } from './inspector.model';

export interface FishSpecies {
  id?: number;
  name: string;
  pointsPerCm: number;
  minimumSize: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateFishSpeciesDto {
  name: string;
  pointsPerCm: number;
  minimumSize?: number;
  description?: string;
}

export interface FishCatch {
  id?: number;
  teamId: number;
  fishSpeciesId: number;
  inspectorId?: number;
  sizeCm: number;
  calculatedPoints: number;
  caughtAt: Date;
  notes?: string;
  valid: boolean;
  team?: Team;
  fishSpecies?: FishSpecies;
  inspector?: Inspector;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateFishCatchDto {
  teamId: number;
  fishSpeciesId: number;
  inspectorId?: number;
  sizeCm: number;
  caughtAt?: string;
  notes?: string;
  valid?: boolean;
}

