import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { FishSpecies, CreateFishSpeciesDto, FishCatch, CreateFishCatchDto } from '../models/fish.model';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  constructor(private apiService: ApiService) { }

  // Fish Species
  getFishSpecies(): Observable<FishSpecies[]> {
    return this.apiService.get<FishSpecies[]>('fish/species');
  }

  getFishSpeciesById(id: number): Observable<FishSpecies> {
    return this.apiService.get<FishSpecies>(`fish/species/${id}`);
  }

  createFishSpecies(species: CreateFishSpeciesDto): Observable<FishSpecies> {
    return this.apiService.post<FishSpecies>('fish/species', species);
  }

  updateFishSpecies(id: number, species: Partial<CreateFishSpeciesDto>): Observable<FishSpecies> {
    return this.apiService.patch<FishSpecies>(`fish/species/${id}`, species);
  }

  deleteFishSpecies(id: number): Observable<void> {
    return this.apiService.delete<void>(`fish/species/${id}`);
  }

  // Fish Catches
  getFishCatches(): Observable<FishCatch[]> {
    return this.apiService.get<FishCatch[]>('fish/catches');
  }

  getFishCatch(id: number): Observable<FishCatch> {
    return this.apiService.get<FishCatch>(`fish/catches/${id}`);
  }

  createFishCatch(catch_: CreateFishCatchDto): Observable<FishCatch> {
    return this.apiService.post<FishCatch>('fish/catches', catch_);
  }

  updateFishCatch(id: number, catch_: Partial<CreateFishCatchDto>): Observable<FishCatch> {
    return this.apiService.patch<FishCatch>(`fish/catches/${id}`, catch_);
  }

  deleteFishCatch(id: number): Observable<void> {
    return this.apiService.delete<void>(`fish/catches/${id}`);
  }

  getCatchStatistics(): Observable<any> {
    return this.apiService.get<any>('fish/catches/statistics');
  }
}