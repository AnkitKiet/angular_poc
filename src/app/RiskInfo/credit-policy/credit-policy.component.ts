import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-credit-policy',
  templateUrl: './credit-policy.component.html',
  styleUrls: ['./credit-policy.component.css']
})
export class CreditPolicyComponent implements OnInit {

 constructor() { }
 proposed: string;
displayedColumns = ['position', 'previous', 'current','proposed'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  ngOnInit() {
  }

}
export interface Element {
 position: string;
 previous: number;
 current: string;
 proposed: string;
}
const ELEMENT_DATA: Element[] = [
  
];