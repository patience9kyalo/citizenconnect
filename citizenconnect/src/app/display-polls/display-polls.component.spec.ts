import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPollsComponent } from './display-polls.component';

describe('DisplayPollsComponent', () => {
  let component: DisplayPollsComponent;
  let fixture: ComponentFixture<DisplayPollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPollsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
