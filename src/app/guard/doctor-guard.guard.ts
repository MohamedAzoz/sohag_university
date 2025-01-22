import { CanActivateFn } from '@angular/router';

export const doctorGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
