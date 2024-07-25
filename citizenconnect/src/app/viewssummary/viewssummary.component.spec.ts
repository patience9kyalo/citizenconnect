import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewssummaryComponent } from './viewssummary.component';

describe('ViewssummaryComponent', () => {
  let component: ViewssummaryComponent;
  let fixture: ComponentFixture<ViewssummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewssummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewssummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
