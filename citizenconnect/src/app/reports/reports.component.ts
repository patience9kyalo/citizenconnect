import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../Services/incident.service';
import { Incident } from '../Models/incident';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit{

  incidents: Incident[] = [];

  constructor(private is: IncidentService) { }

  ngOnInit(): void {
    this.displayIncidents();
  }

  displayIncidents(): void {
    this.is.getIncidents().subscribe(incidents => {
      this.incidents = incidents;
    });
  }

}
