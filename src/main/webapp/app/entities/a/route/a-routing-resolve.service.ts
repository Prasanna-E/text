import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IA } from '../a.model';
import { AService } from '../service/a.service';

const aResolve = (route: ActivatedRouteSnapshot): Observable<null | IA> => {
  const id = route.params.id;
  if (id) {
    return inject(AService)
      .find(id)
      .pipe(
        mergeMap((a: HttpResponse<IA>) => {
          if (a.body) {
            return of(a.body);
          }
          inject(Router).navigate(['404']);
          return EMPTY;
        }),
      );
  }
  return of(null);
};

export default aResolve;
