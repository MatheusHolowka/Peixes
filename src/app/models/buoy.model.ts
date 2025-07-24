export interface Buoy {
  id?: number;
  code: string;
  description?: string;
  location?: string;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateBuoyDto {
  code: string;
  description?: string;
  location?: string;
  active?: boolean;
}

