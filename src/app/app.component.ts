import { Component } from '@angular/core';
import { AutoGrowDirective } from './directives/auto-grow.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive = true;
  title = 'app works!';
}
