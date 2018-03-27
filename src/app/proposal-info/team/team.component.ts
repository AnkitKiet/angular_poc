import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
 
displayedColumns = ['Facility', 'Main', 'Currency', 'Existing','Proposed', 'Pricing', 'Fee', 'RAROC','Interest', 'Additional'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit() {
  }

}
export interface Element {
  Facility: string;
  Main:string;
  Currency: string;
  Existing : string;
  Proposed: string;
  Pricing: string;
  Fee: string;
  RAROC: string;
  Interest: string;
  Additional: string;

  }
   
  const ELEMENT_DATA: Element[] = [
   {Facility:'abc',Main:'abc',Currency:'abc',Existing:'abc',Proposed:'ba',Pricing:'sdf',Fee:'ff',RAROC:'cddc',Interest:'df',Additional:'dd'}
  ];
  