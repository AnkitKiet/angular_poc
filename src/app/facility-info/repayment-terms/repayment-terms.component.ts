//import { Component,  } from '@angular/core';
import {Component, NgModule, VERSION, Input, Output, Injectable, EventEmitter,OnInit } from '@angular/core';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {PersonalService} from '../../services/personal.service';

declare var  $:any;

@Component({
  selector: 'app-repayment-terms',
  templateUrl: './repayment-terms.component.html',
  providers: [
    {provide: ValidatorService, useClass: PersonalService }
  ],
  styleUrls: ['./repayment-terms.component.css']
})
export class RepaymentTermsComponent implements OnInit {
 dataSource: TableDataSource<Person>;
  constructor(private personValidator: ValidatorService) { }
  displayedColumns = ['name', 'age', 'actionsColumn'];
  @Input() personList = [ 
    { name: 'Mark', age: 15 },
    { name: 'Brad', age: 50 },
    ] ;
  @Output() personListChange = new EventEmitter<Person[]>();

  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList, Person, this.personValidator);
    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }
  private formData = {
    name : "",
    age : ""
   
  }

 


  addButton(){
    this.formData = {
      name : "",
      age : ""
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
  age: number;
}
