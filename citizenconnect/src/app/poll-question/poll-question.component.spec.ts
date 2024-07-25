import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollQuestionComponent } from './poll-question.component';

describe('PollQuestionComponent', () => {
  let component: PollQuestionComponent;
  let fixture: ComponentFixture<PollQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
