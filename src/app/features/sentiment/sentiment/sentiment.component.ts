import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SentimentService } from '../../../core/services/sentiment.service';

@Component({
  selector: 'app-sentiment',
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ], 
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})


export class SentimentComponent {
  comment: string = '';
  result: string = '';
  loading: boolean = false;
  error: string = '';
  sentimentClass: string = ''; // Added property

  constructor(private sentimentService: SentimentService) {}

  analyzeSentiment() {
    if (!this.comment.trim()) {
      this.error = 'Por favor ingrese un comentario.';
      this.result = '';
      return;
    }

    this.loading = true;
    this.error = '';
    this.result = '';
    this.sentimentClass = ''; // Reset class

    this.sentimentService.analyzeSentiment(this.comment).subscribe({
      next: (response) => {
        this.result = `El sentimiento es: ${response.sentiment}`;
        this.sentimentClass = response.sentiment === 'Positivo' ? 'positive' : 'negative'; // Set class
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Error al analizar el comentario.';
        this.loading = false;
      }
    });
  }
}
