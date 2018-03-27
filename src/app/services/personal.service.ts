import { Injectable } from '@angular/core';

import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {   FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()
export class PersonalService implements ValidatorService {
  getRowValidator(): FormGroup {
    return new FormGroup({
      'name': new FormControl(null, Validators.required),
      'age': new FormControl(),
      });
  }
}
