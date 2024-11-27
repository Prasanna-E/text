import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import AResolve from './route/a-routing-resolve.service';

const aRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/a.component').then(m => m.AComponent),
    data: {
      defaultSort: `id,${ASC}`,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    loadComponent: () => import('./detail/a-detail.component').then(m => m.ADetailComponent),
    resolve: {
      a: AResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    loadComponent: () => import('./update/a-update.component').then(m => m.AUpdateComponent),
    resolve: {
      a: AResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default aRoute;
