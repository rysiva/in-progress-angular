export const EnvironmentName = {
  Local: 'Local',
  Production: 'Production',
} as const;

export type EnvironmentName =
  (typeof EnvironmentName)[keyof typeof EnvironmentName];

export interface Environment {
  inProgress: boolean;
  environmentName: EnvironmentName;
}

export type EnvironmentConfig = Environment;
