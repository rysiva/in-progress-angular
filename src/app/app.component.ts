import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'in-progress-angular-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
