export interface TeamMember {
  id?: number;
  name: string;
  phone: string;
  teamId?: number;
}

export interface Team {
  id?: number;
  name: string;
  captainName: string;
  captainCpf: string;
  captainRg: string;
  captainPhone: string;
  captainArraisCode: string;
  members: TeamMember[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateTeamDto {
  name: string;
  captainName: string;
  captainCpf: string;
  captainRg: string;
  captainPhone: string;
  captainArraisCode: string;
  members: Omit<TeamMember, 'id' | 'teamId'>[];
}

