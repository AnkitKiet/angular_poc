import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-risk-rating-ifrs',
  templateUrl: './risk-rating-ifrs.component.html',
  styleUrls: ['./risk-rating-ifrs.component.css']
})
export class RiskRatingIfrsComponent implements OnInit {

  constructor() { }
 proposed : number;
displayedColumns = ['position', 'previous', 'current', 'proposed'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  ngOnInit() {
  }

}
export interface Element {
 position: string;
 previous: string;
 current: string;
 proposed : number;
}

const ELEMENT_DATA: Element[] = [
  {position: '1', previous: 'Risk Rating of the borrower since inception', current: 'Rating at Inception', proposed: 12},
  {position: '1.a', previous: 'For Term Finances : since inception of relation or 31 Dec 2011,whichever is later', current: '12', proposed: 12},
  {position: '1.b', previous: 'For Working Capital : since inception of relation or 3 years before,whichever is later', current: '50', proposed: 12},
  {position: '2', previous:'Wheather DPD of more than 30 days was witnessed during last one year in any facility', current: '50', proposed: 12},
  {position: '3', previous:'Delay by the Borrower in matters pertaining to documentation for more than the stipulated / normal time frame', current: '50', proposed: 12},
  {position: '4', previous:'Existing or forecast adverse changes in buisness,financial or economic conditions that could impact the borrowers ability to meet its commitments', current: '50', proposed: 12},
  {position: '5', previous: 'Inadequate or unreliable financial and other information', current: '50', proposed: 12},
  {position: '6', previous: 'Change in Financials', current: '50', proposed: 12},
  {position: '6.a', previous: 'Fall of 25% more in turnover over previous year', current: '50', proposed: 12},
  {position: '6.b', previous: 'Fall of 25% more in Earnings before interest and tax(EBIT) over previous year', current: '50', proposed: 12},
  {position: '6.c', previous: 'Erotion of networth by more than 20% over previous years with increase in Leverage;', current: '50', proposed: 12},
  {position: '7', previous: 'Fall in current DSCR below 1', current: '50', proposed: 12},
  {position: '8', previous: 'Reduction of more than 20% in "Networth" and "Networth net of non-trade related party transactions', current:'50', proposed: 12},
  {position: '9', previous: 'Deferment / delay in commencment of commercial operations by more than one year.', current: '50', proposed: 12},
  {position: '10', previous: 'An actual or expected adverse change in the regulatory ,economic or technological environment of the borrower including decline in the demand for the Borrowers product.', current: '50', proposed: 12},
  {position: '11', previous: 'Change in value and quality of collaterals,Guarantees,financial support from parent entity / affiliates from last review by more than 20% and below sanctioned level.', current: '50', proposed: 12},
  {position: '12', previous: 'Modifications of terms including extension of moratorium , deferment of payment,waiver of convenants(restructure)', current: '50', proposed: 12},
  {position: '13', previous: 'Borrower is subject to litigation by thirsd parties that may impact his financial position', current: '50', proposed: 12},
  {position: '14', previous: 'Frequent change in senior management', current: '50', proposed: 12},
];