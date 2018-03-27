//import { Component,  } from '@angular/core';
import {Component, NgModule, VERSION, Input, Output, Injectable, EventEmitter,OnInit } from '@angular/core';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {PersonalService} from '../../services/personal.service';

declare var  $:any;


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  providers: [
    {provide: ValidatorService, useClass: PersonalService }
  ],
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  dataSource: TableDataSource<Person>;
  constructor(private personValidator: ValidatorService) { }
  displayedColumns = ['name','Currency','proplimit','intype','rating','baserate','bps','totint','pricingint','penalty', 'actionsColumn'];
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
    rating:"",
    baserate:"",
    bps:"",
    totint:"",
    pricingint:"",
    penalty:""
    }

  foods = [
    {value: 'steak-0', viewValue: 'Short Term Loan'},
    {value: 'pizza-1', viewValue: 'Term Loan'},
    {value: 'tacos-2', viewValue: 'CREDIT CARDS'}
  ];
  cashlist = [
    {value: 'steak-0', viewValue: 'Virtually on demand'},
    {value: 'pizza-1', viewValue: 'Within 90 days'},
    {value: 'tacos-2', viewValue: 'Within 181 to 365 days'},
    {value: 'test', viewValue: 'Possible < 365 days'}
  ];
  qualityEvas=[
    {value: 'steak-0', viewValue: 'Self Evident or undoubted'},
    {value: 'pizza-1', viewValue: 'Strong 3rd party evaluation'},
    {value: 'tacos-2', viewValue: 'Reliable Internal valuation'},
    {value: 'test', viewValue: 'Old dated evaluation'}
  ];

  LTVs=[
    {value: 'steak-0', viewValue: 'Self Evident or undoubted'},
    {value: 'pizza-1', viewValue: 'Strong 3rd party evaluation'},
    {value: 'tacos-2', viewValue: 'Reliable Internal valuation'},
    {value: 'test', viewValue: 'Old dated evaluation'}
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
    totint:"",
    pricingint:"",
    penalty:""
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
  name : string;
  Currency : string;
  proplimit:string;
  intype:string;
  rating:string;
  baserate:string;
  bps:string;
  totint:string;
  pricingint:string;
  penalty:string;
}
