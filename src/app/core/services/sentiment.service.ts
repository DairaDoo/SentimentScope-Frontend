import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// DTO para request
export interface SentimentRequest {
  comment: string;
}

// DTO para response
export interface SentimentResponse {
  sentiment: string;
}

@Injectable({
  providedIn: 'root',
})
export class SentimentService {
  private readonly apiUrl = environment.apiUrl; // ok

  constructor(private http: HttpClient) {}

  analyzeSentiment(comment: string): Observable<SentimentResponse> {
    const body: SentimentRequest = { comment };
    // CORREGIDO: usa /analyze en vez de /predict
    return this.http.post<SentimentResponse>(`${this.apiUrl}/analyze`, body);
  }
}
