//import { Component,  } from '@angular/core';
import {Component, NgModule, VERSION, Input, Output, Injectable, EventEmitter,OnInit } from '@angular/core';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {PersonalService} from '../../services/personal.service';

declare var  $:any;

@Component({
  selector: 'term-condn',
  templateUrl: './terms-nd-condn.component.html',
  providers: [
    {provide: ValidatorService, useClass: PersonalService }
  ],
  styleUrls: ['./terms-nd-condn.component.css']
})
export class TermsNdCondnComponent implements OnInit {



    dataSource: TableDataSource<Person>;
     constructor(private personValidator: ValidatorService) { }
     displayedColumns = ['name', 'age', 'actionsColumn'];
     @Input() personList = [ 
      //  { name: 'Mark', age: 'dfdshf' },
      //  { name: 'Brad', age: 'dfdshf'},
       ] ;
     @Output() personListChange = new EventEmitter<Person[]>();
   
     ngOnInit() {
       this.dataSource = new TableDataSource<any>(this.personList, Person);
       this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
     }

     foods = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
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
       this.dataSource = new TableDataSource<Person>(this.personList, Person);
   
       this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
   
       this.addButton();
       
     }
   
   
   
   
   
   }
   class Person {
     name: string;
     age: string;
   }
   