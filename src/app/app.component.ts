import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CurrencyTickModule } from './currency-tick/currency-tick.module';
import { CurrencyApiService } from '../services/api/currency-api-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, HttpClientModule, RouterOutlet, CurrencyTickModule],
	providers: [HttpClientModule, CurrencyApiService],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
}
