import { Injectable } from '@angular/core';

import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {   FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()
export class FacilityRatingService implements ValidatorService {
  getRowValidator(): FormGroup {
    return new FormGroup({
      'facilitytype': new FormControl(null, Validators.required),
      'remarks': new FormControl(),
      'cashconvrsn': new FormControl(),
      'qtyevaltn': new FormControl(),
      'ltv': new FormControl(),
      'score': new FormControl(),
      'grade': new FormControl(),
      'lgd': new FormControl()
      });
  }
 

}
