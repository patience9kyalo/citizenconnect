import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { addPollQuestions, AddResponse, PollQuestions, PollWithChoices } from '../Models/pollQuestions';
import { HttpClient } from '@angular/common/http';
import { PollVotes } from '../Models/pollVotes';


@Injectable({
  providedIn: 'root'
})

export class PollsService {

  private polls: PollQuestions[] = []

  private baseUrl = 'http://localhost:4000/pollQuestions'
  private BaseUrl = 'http://localhost:4000/pollVotes'
  private baseurl = 'http://localhost:4000/voteCount'

  constructor(private http: HttpClient) { }

  addPollQuestion(question: addPollQuestions): Observable<AddResponse> {
    return this.http.post<AddResponse>(`${this.baseUrl}`, question);
  }

  getPollQuestions(): Observable<PollWithChoices[]> {
    return this.http.get<PollWithChoices[]>(`${this.baseUrl}`)
    
  }

  addVote(vote: PollVotes): Observable<AddResponse> {
    return this.http.post<AddResponse>(`${this.BaseUrl}`, vote);
  }

  getVoteByUserId(userId: string): Observable<PollVotes> {
    return this.http.get<PollVotes>(`${this.BaseUrl}/${userId}`);
  }

  getVoteCounts(choiceId: string): Observable<any> {
    return this.http.get<any>(`${this.baseurl}/${choiceId}`);
  }
}
