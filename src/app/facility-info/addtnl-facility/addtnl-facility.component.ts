import {Component, NgModule, VERSION, Input, Output, Injectable, EventEmitter,OnInit } from '@angular/core';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {PersonalService} from '../../services/personal.service';

declare var  $:any;

@Component({
  selector: 'app-addtnl-facility',
  templateUrl: './addtnl-facility.component.html',
  providers: [
    {provide: ValidatorService, useClass: PersonalService }
  ],
  styleUrls: ['./addtnl-facility.component.css']
})
export class AddtnlFacilityComponent implements OnInit {

  dataSource: TableDataSource<Person>;
  constructor(private personValidator: ValidatorService) { }
  displayedColumns = ['name','Currency','proplimit','intype','rating', 'actionsColumn'];
  @Input() personList = [ 
  
    ] ;
  @Output() personListChange = new EventEmitter<Person[]>();

  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList, Person, this.personValidator);
    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }
  private formData = {
    name : "",
    Currency : "",
    proplimit:"",
    intype:"",
   
  }

 facilities = [
    {value: 'Short Term Loan', viewValue: 'Short Term Loan'},
    {value: 'Term Loan', viewValue: 'Term Loan'},
    {value: 'CREDIT CARDS', viewValue: 'CREDIT CARDS'}
  ];
 


  addButton(){
    this.formData = {
      name : "",
      Currency : "",
      proplimit:"",
      intype:""
    }
  $('div#repayment-dialog').toggle();
  
  }
  savedata(formData){
   
    this.personList=this.personList.concat(formData);
    this.dataSource = new TableDataSource<Person>(this.personList, Person, this.personValidator);

    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));

    this.addButton();
    
  }





}
class Person {
  name: string;
  Currency: string;
  proplimit:string;
  intype:string;
}
