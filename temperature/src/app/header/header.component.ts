import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  celsius: number =0;
  fahrenheit: number =32;

  convertToCelsius() {
    this.celsius = (this.fahrenheit - 32) * 5 / 9;
  }

  convertToFahrenheit() {
    this.fahrenheit = (this.celsius * 9 / 5) + 32;
  }
}
