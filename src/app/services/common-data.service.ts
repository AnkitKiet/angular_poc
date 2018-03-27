import { Injectable } from '@angular/core';

@Injectable()
export class CommonDataService {

  constructor() { }

   getfacilityType(){
     return this.facilityType;
   }


  facilityType = [
    {value: 'Short Term Loan', viewValue: 'Short Term Loan'},
    {value: 'Term Loan', viewValue: 'Term Loan'},
    {value: 'CREDIT CARDS', viewValue: 'CREDIT CARDS'},
    {value: 'Bills Discounting', viewValue: 'Bills Discounting'}
  ];

}
