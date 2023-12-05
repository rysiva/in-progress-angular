import { Route } from '@angular/router';
import { inProgressGuard } from './in-progress.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    canMatch: [inProgressGuard],
    loadComponent: () => import('./develop-in-progress.component'),
  },
  {
    path: '',
    loadComponent: () => import('./develop-completed.component'),
  },
];
