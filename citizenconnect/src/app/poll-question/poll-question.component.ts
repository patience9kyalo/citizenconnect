import { Component, OnInit } from '@angular/core';
import { addPollQuestions, AddResponse } from '../Models/pollQuestions';
import { PollsService } from '../Services/polls.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { pollQuestionsActions } from '../State/Actions/pollQuestions.actions';
import { selectPollQuestions } from '../State/Selector/polls.selector';

@Component({
  selector: 'app-poll-question',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './poll-question.component.html',
  styleUrl: './poll-question.component.css'
})
export class PollQuestionComponent implements OnInit {

  pollForm!: FormGroup
  error!: string
  message!: string

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.pollForm = this.fb.group({
      QuestionText: ['', Validators.required],
      choices: this.fb.array([this.createChoice()], Validators.required),
    });
  }

  createChoice(): FormGroup {
    return this.fb.group({
      choiceText: ['', Validators.required],
    });
  }

  get choices(): FormArray {
    return this.pollForm.get('choices') as FormArray;
  }

  addChoice(): void {
    this.choices.push(this.createChoice());
  }

  removeChoice(index: number): void {
    if (this.choices.length > 1) {
      this.choices.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.pollForm.valid) {
      const formValue = this.pollForm.value;
      const formattedPoll = {
        QuestionText: formValue.QuestionText,
        choices: formValue.choices.map((choice: { choiceText: string }) => choice.choiceText),
      };

      // Dispatch the action
      this.store.dispatch(pollQuestionsActions.addPollQuestion({ question: formattedPoll }));


    }
  }
}
