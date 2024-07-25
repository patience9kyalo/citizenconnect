import { Component } from '@angular/core';
import { PollsService } from '../Services/polls.service';
import { CommonModule } from '@angular/common';
import { addPollQuestions, PollQuestions, PollWithChoices } from '../Models/pollQuestions';
import { v4 as uuid } from 'uuid';
import { pollQuestionsActions } from '../State/Actions/pollQuestions.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { PollVotes } from '../Models/pollVotes';

@Component({
  selector: 'app-display-polls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-polls.component.html',
  styleUrl: './display-polls.component.css'
})

export class DisplayPollsComponent {

  // Array to store polls with their choices
  pollsWithChoices: PollWithChoices[] = [];
  pollsForm!: FormGroup


  constructor(private pollService: PollsService, private store: Store<AppState>, private fb: FormBuilder, private authservice: AuthService) { }

  ngOnInit(): void {
    // Load polls with their choices on component initialization
    this.loadPollsWithChoices();


  }

  // Fetch all polls with their associated choices
  loadPollsWithChoices(): void {
    this.pollService.getPollQuestions().subscribe(polls => {
      this.pollsWithChoices = polls;
      console.log(polls);
    }, error => {
      console.error('Error loading polls:', error);
    });
  }

  // Handle voting for a specific choice
  vote(choiceId: string, questionId: string): void {
    const vote: PollVotes = {
      VotesId: uuid(), // Generate a unique ID
      ChoicesId: choiceId,
      QuestionId: questionId,
      // User ID is not needed here, as it's retrieved from the token on the backend
    };
  
    // Dispatch action to store
    this.store.dispatch(pollQuestionsActions.addVote({ vote }));
  }
}


