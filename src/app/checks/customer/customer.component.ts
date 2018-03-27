import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  clists = [
    {value: 'Yes', viewValue: 'Yes'},
    {value: 'No', viewValue: 'No'}    
  ];
  constructor() { }

  ngOnInit() {
  }

}
