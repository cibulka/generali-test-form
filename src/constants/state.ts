export const STATE = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  FAILURE: 'FAILURE',
  SUCCESS: 'SUCCESS',
} as const;

export type State = (typeof STATE)[keyof typeof STATE];
