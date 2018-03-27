import {Component, NgModule, VERSION, Input, Output, Injectable, EventEmitter,OnInit } from '@angular/core';
import { TableDataSource } from 'angular4-material-table';
import {PersonalService} from '../../services/personal.service';
import {CommonDataService} from '../../services/common-data.service';
declare var  $:any;




@Component({
  selector: 'app-new-exist-facility',
  templateUrl: './new-exist-facility.component.html',
  styleUrls: ['./new-exist-facility.component.css']
})
export class NewExistFacilityComponent implements OnInit {

  dataSource: TableDataSource<Person>;
  commondata:CommonDataService;
  constructor() {
   
 
   }

    facilities = [
    {value: 'Short Term Loan', viewValue: 'Short Term Loan'},
    {value: 'Term Loan', viewValue: 'Term Loan'},
    {value: 'CREDIT CARDS', viewValue: 'CREDIT CARDS'}
  ];
   remarks = [
    {value: 'General Limit', viewValue: 'General Limit'},
    {value: 'General Project Limit', viewValue: 'General Project Limit'},
    {value: 'Global Limit', viewValue: 'Global Limit'}
  ];

  currencies=[
 {value: 'AED', viewValue: 'AED'},
    {value: 'AUD', viewValue: 'AUD'},
    {value: 'BDT', viewValue: 'BDT'}


  ];
  displayedColumns = ['name','Currency','proplimit','intype','rating','baserate','bps','totint','pricingint','penalty',
  'paytype','stepdown','payIn','amnt','validfrom','regPay','restrctr', 'actionsColumn'];
  restructure = [
    {value: '0', viewValue: 'No'},
    {value: '1', viewValue: 'Yes'},
   
  ];
  




  @Input() personList = [ 
  
    ] ;
  @Output() personListChange = new EventEmitter<Person[]>();

  ngOnInit() {

    this.dataSource = new TableDataSource<any>(this.personList, Person);
    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }
  private formData = {
    name:"",
    Currency:"",
    proplimit:"",
    intype:"",
    rating:"",
    baserate:"",
    bps:"",
    totint:"",
    pricingint:"",
    penalty:"",
  paytype:"",
  stepdown:"",
  payIn:"",
  amnt:"",
  validfrom:"",
  regPay:"",

  restrctr:""
   
  }

 


  addButton(){
    this.formData = {
      name:"",
    Currency:"",
    proplimit:"",
    intype:"",
    rating:"",
    baserate:"",
    bps:"",
    totint:"",
    pricingint:"",
    penalty:"",
  paytype:"",
  stepdown:"",
  payIn:"",
  amnt:"",
  validfrom:"",
  regPay:"",
  restrctr:""
    }
  $('div#existfact-dialog').toggle();
  
  }
  savedata(formData){
   
    this.personList=this.personList.concat(formData);
    this.dataSource = new TableDataSource<Person>(this.personList, Person);

    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));

    this.addButton();
    
  }





}
class Person {
  name:string;
  Currency:string;
  proplimit:string;
  intype:string;
  rating:string;
  baserate:string;
  bps:string;
  totint:string;
  pricingint:string;
  penalty:string;
paytype:string;
stepdown:string;
payIn:string;
amnt:string;
validfrom:string;
regPay:string;
restrctr:string;
}

