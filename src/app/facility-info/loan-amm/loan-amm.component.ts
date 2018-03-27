import {Component, NgModule, VERSION, Input, Output, Injectable, EventEmitter,OnInit } from '@angular/core';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {PersonalService} from '../../services/personal.service';

declare var  $:any;


@Component({
  selector: 'app-loan-amm',
  templateUrl: './loan-amm.component.html',
  providers: [
    {provide: ValidatorService, useClass: PersonalService }
  ],
  styleUrls: ['./loan-amm.component.css']
})
export class LoanAmmComponent implements OnInit {
  dataSource: TableDataSource<Person>;
  constructor(private personValidator: ValidatorService) { }
  displayedColumns = ['name','Currency','proplimit','intype','rating','baserate','bps','totint','pricingint','penalty',
  'paytype','stepdown','payIn','amnt','validfrom','regPay', 'actionsColumn'];
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
  actionsColumn:""
   
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
  actionsColumn:""
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
actionsColumn:string;
}

