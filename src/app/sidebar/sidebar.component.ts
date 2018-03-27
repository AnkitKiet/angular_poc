import { Component, OnInit } from '@angular/core';
declare var $ : any;
declare var xxx :boolean;
var xxx=true;
declare var flag :any;


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   togglemenu(){
     
     xxx ? xxx=false : xxx=true;
 if(xxx===false){
  $('#sidebar').toggleClass('active');
  $('#mySidebar').removeClass('col-md-3');
  $('#myForm').removeClass('col-md-9');
  $('#myForm').addClass('col-md-10');
 

 } else{
  $('#sidebar').toggleClass('active');
  $('#myForm').removeClass('col-md-10');
  $('#mySidebar').addClass('col-md-3');
  $('#myForm').addClass('col-md-9');

 }
   

}

  

}
