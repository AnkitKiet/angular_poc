import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {
  lists=[
    {value: 'Yes', viewValue: 'Pass'},
    {value: 'No', viewValue: 'Fail'}     ];
  constructor() { }

  ngOnInit() {
  }

}
