import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'analytics', pathMatch: 'full' },
  {
    path: 'analytics',
    loadComponent: () =>
      import('@libs/analytics').then((c) => c.AnalyticsComponent),
  },
  {
    path: 'user',
    loadComponent: () => import('@libs/user').then((c) => c.UserComponent),
  },
];
