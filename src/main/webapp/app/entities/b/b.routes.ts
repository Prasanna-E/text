import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import BResolve from './route/b-routing-resolve.service';

const bRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/b.component').then(m => m.BComponent),
    data: {
      defaultSort: `id,${ASC}`,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    loadComponent: () => import('./detail/b-detail.component').then(m => m.BDetailComponent),
    resolve: {
      b: BResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    loadComponent: () => import('./update/b-update.component').then(m => m.BUpdateComponent),
    resolve: {
      b: BResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./update/b-update.component').then(m => m.BUpdateComponent),
    resolve: {
      b: BResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default bRoute;
