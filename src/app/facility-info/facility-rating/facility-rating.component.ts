//import { Component,  } from '@angular/core';
import {Component, NgModule, VERSION, Input, Output, Injectable, EventEmitter,OnInit } from '@angular/core';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {PersonalService} from '../../services/personal.service';

declare var  $:any;

@Component({
  selector: 'app-facility-rating',
  templateUrl: './facility-rating.component.html',
  providers: [
    {provide: ValidatorService, useClass: PersonalService }
  ],
  styleUrls: ['./facility-rating.component.css']
})
export class  FacilityRatingComponent implements OnInit {
 dataSource: TableDataSource<Person>;
  constructor() { }

  facilities = [
    {value: 'Short Term Loan', viewValue: 'Short Term Loan'},
    {value: 'Term Loan', viewValue: 'Term Loan'},
    {value: 'CREDIT CARDS', viewValue: 'CREDIT CARDS'}
  ];
  cashlist = [
    {value: 'Virtually on demand', viewValue: 'Virtually on demand'},
    {value: 'Within 90 days', viewValue: 'Within 90 days'},
    {value: 'Within 181 to 365 days', viewValue: 'Within 181 to 365 days'},
    {value: 'Possible < 365 days', viewValue: 'Possible < 365 days'}
  ];
  qualityEvas=[
    {value: 'Self Evident or undoubted', viewValue: 'Self Evident or undoubted'},
    {value: 'Strong 3rd party evaluation', viewValue: 'Strong 3rd party evaluation'},
    {value: 'Reliable Internal valuation', viewValue: 'Reliable Internal valuation'},
    {value: 'Old dated evaluation', viewValue: 'Old dated evaluation'}
  ];

  LTVs=[
    {value: 'Self Evident or undoubted', viewValue: 'Self Evident or undoubted'},
    {value: 'Strong 3rd party evaluation', viewValue: 'Strong 3rd party evaluation'},
    {value: 'Reliable Internal valuation', viewValue: 'Reliable Internal valuation'},
    {value: 'Old dated evaluation', viewValue: 'Old dated evaluation'}
  ];
  displayedColumns = ['name','remarks','cashcnvrn','qtyeva','ltv','score','grade','lgd', 'actionsColumn'];
  @Input() personList = [ 
    // { name: 'Mark', remarks: 15 ,cashcnvrn:'fgfg',},
    // { name: 'Brad', remarks: 50,cashcnvrn:'fgfg' },
    ] ;
  @Output() personListChange = new EventEmitter<Person[]>();

  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList, Person);
    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }
  private formData = {
    name : "",    
    remarks: "",
    cashcnvrn:"",
    qtyeva:"",
    ltv:"",
    score:"",
    grade:"",
    lgd:""
    }

 


  addButton(){
    this.formData = {
      name : "",    
    remarks: "",
    cashcnvrn:"",
    qtyeva:"",
    ltv:"",
    score:"",
    grade:"",
    lgd:""
   
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
  remarks: string;
  cashcnvrn:string;
  qtyeva:string;
  ltv:string;
  score:string;
  grade:string;
  lgd:string;
 
}
