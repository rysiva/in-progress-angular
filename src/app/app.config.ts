import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { ENVIRONMENT_CONFIG } from './environment.config';
import { environment } from './environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    {
      provide: ENVIRONMENT_CONFIG,
      useValue: environment,
    },
  ],
};
