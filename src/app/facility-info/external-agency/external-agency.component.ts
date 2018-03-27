import {Component, NgModule, VERSION, Input, Output, Injectable, EventEmitter,OnInit } from '@angular/core';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {PersonalService} from '../../services/personal.service';

declare var  $:any;

@Component({
  selector: 'app-external-agency',
  templateUrl: './external-agency.component.html',
  providers: [
    {provide: ValidatorService, useClass: PersonalService }
  ],
  styleUrls: ['./external-agency.component.css']
})
export class ExternalAgencyComponent implements OnInit {

  dataSource: TableDataSource<Person>;
  constructor(private personValidator: ValidatorService) { }
  displayedColumns = ['name','Currency','proplimit','intype','rating','baserate','bps', 'actionsColumn'];
  @Input() personList = [ 
  
    ] ;
  @Output() personListChange = new EventEmitter<Person[]>();

  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList, Person);
    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }
  private formData = {
    name : "",
    Currency : "",
    proplimit:"",
    intype:"",
    rating:"",
    baserate:"",
    bps:"",
   
  }
  foods = [
    {value: '0', viewValue: 'Short Term Loan'},
    {value: '1', viewValue: 'Term Loan'},
    {value: '2', viewValue: 'CREDIT CARDS'}
  ];
 


  addButton(){
    this.formData = {
      name : "",
      Currency : "",
      proplimit:"",
      intype:"",
      rating:"",
      baserate:"",
      bps:"",
    }
  $('div#repayment-dialog').toggle();
  
  }
  savedata(formData){
   
    this.personList=this.personList.concat(formData);
    this.dataSource = new TableDataSource<Person>(this.personList, Person);

    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));

    this.addButton();
    
  }





}
class Person {
  name: string;
  Currency: string;
  proplimit:string;
  intype:string;

  rating:string;
  baserate:string;
  bps:string;
}
