import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';



export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const authservice = inject(AuthserviceService);

  if (authservice.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

