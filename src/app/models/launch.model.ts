import { Team } from './team.model';
import { Buoy } from './buoy.model';
import { Inspector } from './inspector.model';

export enum AssignmentType {
  TEAM = 'team',
  INSPECTOR = 'inspector'
}

export interface BuoyAssignment {
  id?: number;
  buoyId: number;
  teamId?: number;
  inspectorId?: number;
  assignmentType: AssignmentType;
  assignedAt: Date;
  notes?: string;
  buoy?: Buoy;
  team?: Team;
  inspector?: Inspector;
  createdAt?: Date;
}

export interface CreateBuoyAssignmentDto {
  buoyId: number;
  teamId?: number;
  inspectorId?: number;
  assignmentType: AssignmentType;
  assignedAt?: string;
  notes?: string;
}

