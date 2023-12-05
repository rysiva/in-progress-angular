import { inject } from '@angular/core';
import { ENVIRONMENT_CONFIG } from './environment.config';

export const inProgressGuard = () => {
  return inject(ENVIRONMENT_CONFIG).inProgress;
};
