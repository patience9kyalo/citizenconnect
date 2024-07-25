import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IncidentService } from '../Services/incident.service';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { incidentActions } from '../State/Actions/incident.action';
import { incidentSelector } from '../State/Selector/incident.selector';


@Component({
  selector: 'app-incident',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './incident.component.html',
  styleUrl: './incident.component.css'
})

export class IncidentComponent implements OnInit {

  incidentForm!: FormGroup;
  error!: string;
  message!: string;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>) {}

  ngOnInit(): void {
    this.incidentForm = this.fb.group({
      incidentLocation: ['', Validators.required],
      incidentStatus: ['', Validators.required],
      incidentDescription: ['', Validators.required],
      incidentImage: ['']
    });
  }

  onSubmit(): void {
    if (this.incidentForm.valid) {
      this.store.dispatch(incidentActions.add({ incident: this.incidentForm.value }));
      this.store.select(incidentSelector).subscribe(
        (response) => {
          this.message = 'Incident added successfully';
          window.location.reload()
        },
        (error) => {
          this.error = 'Error adding incident: ' + error.message;
        }
      );
    }
  }
}