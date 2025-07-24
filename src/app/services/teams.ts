import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { Team, CreateTeamDto } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private apiService: ApiService) { }

  getTeams(): Observable<Team[]> {
    return this.apiService.get<Team[]>('teams');
  }

  getTeam(id: number): Observable<Team> {
    return this.apiService.get<Team>(`teams/${id}`);
  }

  createTeam(team: CreateTeamDto): Observable<Team> {
    return this.apiService.post<Team>('teams', team);
  }

  updateTeam(id: number, team: Partial<CreateTeamDto>): Observable<Team> {
    return this.apiService.patch<Team>(`teams/${id}`, team);
  }

  deleteTeam(id: number): Observable<void> {
    return this.apiService.delete<void>(`teams/${id}`);
  }

  getTeamRanking(): Observable<any[]> {
    return this.apiService.get<any[]>('teams/ranking');
  }
}