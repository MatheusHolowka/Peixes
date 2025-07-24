export interface Inspector {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateInspectorDto {
  name: string;
}

