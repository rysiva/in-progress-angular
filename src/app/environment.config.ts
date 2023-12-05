import { InjectionToken } from '@angular/core';
import { EnvironmentConfig } from './environment.model';

export const ENVIRONMENT_CONFIG = new InjectionToken<EnvironmentConfig>(
  'Environment Configuration'
);
