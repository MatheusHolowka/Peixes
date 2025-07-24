import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Team {
  id: number;
  name: string;
  captainName: string;
  captainCpf: string;
  captainRg: string;
  captainPhone: string;
  captainArraisCode?: string;
  members: TeamMember[];
}

interface TeamMember {
  name: string;
  phone: string;
}

interface RankingTeam {
  id: number;
  name: string;
  captainName: string;
  totalPoints: number;
  totalFish: number;
}

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './teams.html',
  styleUrl: './teams.scss'
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];
  ranking: RankingTeam[] = [];
  teamForm: any = {
    name: '',
    captainName: '',
    captainCpf: '',
    captainRg: '',
    captainPhone: '',
    captainArraisCode: '',
    members: []
  };
  editingTeam: Team | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTeams();
    this.loadRanking();
  }

  loadTeams(): void {
    this.http.get<Team[]>('http://localhost:3000/teams').subscribe({
      next: (data) => (this.teams = data),
      error: (err) => console.error('Erro ao carregar equipes:', err)
    });
  }

  loadRanking(): void {
    this.http.get<RankingTeam[]>('http://localhost:3000/teams/ranking').subscribe({
      next: (data) => (this.ranking = data),
      error: (err) => console.error('Erro ao carregar ranking:', err)
    });
  }

  addMember(): void {
    if (this.teamForm.members.length < 2) {
      this.teamForm.members.push({ name: '', phone: '' });
    }
  }

  removeMember(index: number): void {
    this.teamForm.members.splice(index, 1);
  }

  onSubmit(): void {
    // Validações antes de enviar
    if (!this.teamForm.name || this.teamForm.name.length > 100) {
      alert('O nome da equipe é obrigatório e deve ter no máximo 100 caracteres.');
      return;
    }
    if (!this.teamForm.captainName || this.teamForm.captainName.length > 100) {
      alert('O nome do capitão é obrigatório e deve ter no máximo 100 caracteres.');
      return;
    }
    if (!this.teamForm.captainCpf || this.teamForm.captainCpf.length < 11 || this.teamForm.captainCpf.length > 14) {
      alert('O CPF do capitão é obrigatório e deve ter entre 11 e 14 caracteres.');
      return;
    }
    if (!this.teamForm.captainRg || this.teamForm.captainRg.length > 20) {
      alert('O RG do capitão é obrigatório e deve ter no máximo 20 caracteres.');
      return;
    }
    if (!this.teamForm.captainPhone || this.teamForm.captainPhone.length > 20) {
      alert('O telefone do capitão é obrigatório e deve ter no máximo 20 caracteres.');
      return;
    }
    if (!this.teamForm.captainArraisCode || this.teamForm.captainArraisCode.length > 50) {
      alert('O código arrais do capitão é obrigatório e deve ter no máximo 50 caracteres.');
      return;
    }
    if (this.teamForm.members.length > 2) {
      alert('A equipe pode ter no máximo 2 membros.');
      return;
    }
    for (let i = 0; i < this.teamForm.members.length; i++) {
      const member = this.teamForm.members[i];
      if (!member.name || member.name.length > 100) {
        alert(`O nome do membro ${i + 1} é obrigatório e deve ter no máximo 100 caracteres.`);
        return;
      }
      if (!member.phone || member.phone.length > 20) {
        alert(`O telefone do membro ${i + 1} é obrigatório e deve ter no máximo 20 caracteres.`);
        return;
      }
    }

    console.log('Payload enviado:', this.teamForm);

    const url = this.editingTeam ? `http://localhost:3000/teams/${this.editingTeam.id}` : 'http://localhost:3000/teams';
    const method = this.editingTeam ? 'patch' : 'post';

    this.http[method](url, this.teamForm).subscribe({
      next: () => {
        this.loadTeams();
        this.loadRanking();
        this.resetForm();
      },
      error: (err) => {
        console.error('Erro ao salvar equipe:', err);
        console.log('Detalhes do erro:', err.error);
        alert(`Erro ao salvar equipe: ${err.error.message || 'Verifique os dados e tente novamente'}`);
      }
    });
  }

  editTeam(team: Team): void {
    this.editingTeam = team;
    this.teamForm = { ...team };
  }

  cancelEdit(): void {
    this.resetForm();
  }

  deleteTeam(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta equipe?')) {
      this.http.delete(`http://localhost:3000/teams/${id}`).subscribe({
        next: () => {
          this.loadTeams();
          this.loadRanking();
        },
        error: (err) => console.error('Erro ao excluir equipe:', err)
      });
    }
  }

  private resetForm(): void {
    this.teamForm = {
      name: '',
      captainName: '',
      captainCpf: '',
      captainRg: '',
      captainPhone: '',
      captainArraisCode: '',
      members: []
    };
    this.editingTeam = null;
  }
}