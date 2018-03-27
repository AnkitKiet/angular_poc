import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns = ['position', 'name', 'weight', 'symbol','landmark','country','phone','fax','email'];
   //dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

   @ViewChild(MatPaginator) paginator: MatPaginator;

   /**
    * Set the paginator after the view init since this component will
    * be able to query its view for the initialized paginator.
    */
   ngAfterViewInit() {
     //this.dataSource.paginator = this.paginator;
   }
   
 }

 export interface Element {
   name: string;
   position: number;
   weight: number;
   symbol: string;
   landmark:string;
   country:string;
   phone:string;
   fax:string;
   email:string;
 }


