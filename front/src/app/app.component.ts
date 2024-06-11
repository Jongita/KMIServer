import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KmicalculatorComponent } from './components/kmicalculator/kmicalculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KmicalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
