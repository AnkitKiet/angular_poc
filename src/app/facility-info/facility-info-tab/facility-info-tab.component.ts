import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility-info-tab',
  templateUrl: './facility-info-tab.component.html',
  styleUrls: ['./facility-info-tab.component.css']
})
export class FacilityInfoTabComponent implements OnInit {
  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
