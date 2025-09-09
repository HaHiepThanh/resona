import {Component, Inject, inject} from '@angular/core';
import {MaterialModule} from '../../shared/modules/material.module';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-share-snackbar',
  imports: [
    MaterialModule
  ],
  templateUrl: './share-snackbar.component.html',
  styleUrl: './share-snackbar.component.scss',
})
export class ShareSnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);

  readonly data = inject<string>(MAT_SNACK_BAR_DATA);

  constructor() {}

}

