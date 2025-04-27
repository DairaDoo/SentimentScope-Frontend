import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private readonly apiUrl = 'http://localhost:5268/api/Sentiment'; // ok

  constructor(private http: HttpClient) {}

  analyzeSentiment(comment: string): Observable<SentimentResponse> {
    const body: SentimentRequest = { comment };
    // CORREGIDO: usa /analyze en vez de /predict
    return this.http.post<SentimentResponse>(`${this.apiUrl}/analyze`, body);
  }
}

