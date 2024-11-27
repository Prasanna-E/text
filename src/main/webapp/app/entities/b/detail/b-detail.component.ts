import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatePipe, FormatMediumDatetimePipe } from 'app/shared/date';
import { IB } from '../b.model';

@Component({
  standalone: true,
  selector: 'jhi-b-detail',
  templateUrl: './b-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class BDetailComponent {
  b = input<IB | null>(null);

  previousState(): void {
    window.history.back();
  }
}
