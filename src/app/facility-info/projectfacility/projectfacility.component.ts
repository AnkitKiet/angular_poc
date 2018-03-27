//import { Component,  } from '@angular/core';
import {Component, NgModule, VERSION, Input, Output, Injectable, EventEmitter,OnInit } from '@angular/core';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {PersonalService} from '../../services/personal.service';

declare var  $:any;

@Component({
  selector: 'app-projectfacility',
  templateUrl: './projectfacility.component.html',
  styleUrls: ['./projectfacility.component.css']
})
export class ProjectfacilityComponent implements OnInit {
  dataSource: TableDataSource<Person>;
  displayedColumns = ['remarks','cashcnvrn','qtyeva','ltv','score','grade','lgd','proppricing','preTenor', 'actionsColumn'];
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
  
  remarks: string;
  cashcnvrn:string;
  qtyeva:string;
  ltv:string;
  score:string;
  grade:string;
  lgd:string;
 
}