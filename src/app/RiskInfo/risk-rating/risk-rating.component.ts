
import {Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-risk-rating',
  templateUrl: './risk-rating.component.html',
  styleUrls: ['./risk-rating.component.css']
})
export class RiskRatingComponent implements OnInit {

  constructor() { }
 proposed : number;
displayedColumns = ['position', 'previous', 'current', 'proposed'];
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
 position: string;
 previous:number;
 current: number;
 proposed : number;
}

const ELEMENT_DATA: Element[] = [
  {position: 'Scores under Financial Subjective parameters', previous: 12, current: 12, proposed: 12},
  {position: 'Scores Under Business Analysis', previous: 12, current: 12, proposed: 12},
  {position: 'Borrower Rating - Score', previous: 23, current: 50, proposed: 12},
  {position: 'Credit Risk Grading', previous: 23, current: 50, proposed: 12},
  {position: 'Balance Sheet Date', previous: 24, current: 50, proposed: 12},
];



/**
 * @title Table with pagination
 */
