import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

this.router= Router;
@Component({
  selector: 'app-head-tab',
  templateUrl: './head-tab.component.html',
  styleUrls: ['./head-tab.component.css']
})
export class HeadTabComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
    
  }
  fetchNews(evt: any) {
    //window.location.href='http://localhost:4200/generalinfo'
  switch(evt){
  case "ngb-tab-0":   this.router.navigate(['/generalinfo']);
  break;
  case "ngb-tab-1" : this.router.navigate(['/menubar']);
  break;
  default:  console.log("default");
  this.router.navigate(['/']);

    }


  }
}
