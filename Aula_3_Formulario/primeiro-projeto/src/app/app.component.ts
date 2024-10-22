import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrimeiroComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto';
}
