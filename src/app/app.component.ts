import { Component } from '@angular/core';
import { HeaderComponent } from './core/components/header/header.component'; 
import { SentimentComponent } from './features/sentiment/sentiment/sentiment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, SentimentComponent] // Aquí lo IMPORTAS
})
export class AppComponent {
  title = 'SentimentScopeFrontend'; 
}
