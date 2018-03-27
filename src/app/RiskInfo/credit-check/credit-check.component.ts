import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-credit-check',
  templateUrl: './credit-check.component.html',
  styleUrls: ['./credit-check.component.css']
})
export class CreditCheckComponent implements OnInit {

 constructor() { }
displayedColumns = ['customertype',
'legalstatus',
'groupcustomer'
,'singleentity', 
'groupentity','allowedsingle','allowedgroup','customerexposure','groupexposure','customerexposurelimit','groupexposurelimit']; 
 
 dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  ngOnInit() {
  }

}
const ELEMENT_DATA: Element[] = [
  
];
export interface Element {
 customertype: string;
 legalstatus: number;
 groupcutomer: string;
 singleentity: string;
 groupentity: string;
 allowedsingle: string;
 allowedgroup: string;
 customerexposure: string;
 groupexposure: string;
 customerexposurelimit: string;
 groupexposurelimit: string;
}
