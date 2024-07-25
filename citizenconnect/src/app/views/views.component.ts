import { Component, OnInit } from '@angular/core';
import { Views } from '../Models/views';
import { ViewsService } from '../Services/views.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { viewsActions } from '../State/Actions/views.action';
import { selectViewsState } from '../State/Selector/views.selector';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent implements OnInit {

  views: Views[] = [];
  viewForm!: FormGroup;
  message!: string
  error! : string

  constructor(private viewsService: ViewsService,private fb: FormBuilder, private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.viewForm = this.fb.group({
      viewDescription: ['', Validators.required]
    });
    this.loadViews();
  }

  loadViews(): void {
    this.viewsService.getViews().subscribe(views => this.views = views);
  }

  onSubmit(): void {
    if (this.viewForm.valid) {
      this.store.dispatch(viewsActions.add({views : this.viewForm.value}))
      this.store.select(selectViewsState).subscribe(
        (response) => {
          this.message = 'View added successfully'
          window.location.reload()
        },
        (error) => {
          this.error = 'Error adding view: ' + error.message;
        }
      )

    }
    
  }
  goToViewSummary(): void {
    this.router.navigate(['viewssummary']);
  }
  

}
