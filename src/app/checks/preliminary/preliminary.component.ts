import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-preliminary',
  templateUrl: './preliminary.component.html',
  styleUrls: ['./preliminary.component.css']
})
export class PreliminaryComponent implements OnInit {
  Blacklists = [
    {value: 'Yes', viewValue: 'Yes'},
    {value: 'No', viewValue: 'No'}    
  ];

  constructor() { }

  ngOnInit() {
  }

}
