import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent implements OnInit {
  totalTeams = 0;
  activeBuoys = 0;
  totalCatches = 0;
  totalInspectors = 0;

  constructor() { }

  ngOnInit(): void {
    // Dados mockados para demonstração
    this.totalTeams = 12;
    this.activeBuoys = 8;
    this.totalCatches = 45;
    this.totalInspectors = 5;
  }
}