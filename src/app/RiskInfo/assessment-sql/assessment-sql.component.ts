import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-assessment-sql',
  templateUrl: './assessment-sql.component.html',
  styleUrls: ['./assessment-sql.component.css']
})
export class AssessmentSqlComponent implements OnInit {

  constructor() { }
 
displayedColumns = ['position', 'previous', 'current'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  ngOnInit() {
  }

}
export interface Element {
 position: string;
 previous: number;
 current: string;
}
const ELEMENT_DATA: Element[] = [
  {position: 'Fund Based Limits', previous:90000.0, current: '2500000.0'},
  {position: 'Non Fund Based Limits', previous: 50000.0, current: '2000000.0'},
  {position: 'Term Loans', previous: 6000.01, current: '1700000.0'},
  {position: 'Investments in Shares, Debentures etc.', previous:40000.50, current: '1600000.0'},
  {position: 'Marginal Risk', previous:30000.20, current: '1200000.0'},
  {position: 'Others (Specify)', previous:100000.0, current: '900000.0'},
  {position: 'Total', previous: 200.00, current: '9.9E7'},
  {position: 'Total exposure as % of Banks Capital Funds', previous: 8000.0, current: '10.0'},
  {position: 'Banks Permissible Exposure Level in Terms of Our Latest Audited Balance Sheet', previous: 5000.0, current: '9.9E7'},
];