import { Component } from '@angular/core';
import { ViewsService } from '../Services/views.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewssummary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewssummary.component.html',
  styleUrl: './viewssummary.component.css'
})
export class ViewssummaryComponent {

  viewsSummary: string = '';

  constructor(private viewsService: ViewsService) { }

  ngOnInit(): void {
    this.loadViewsSummary();
  }

  loadViewsSummary() {
    this.viewsService.getViewsSummary().subscribe(summary => {
      this.viewsSummary = summary;
    });
  }

}
