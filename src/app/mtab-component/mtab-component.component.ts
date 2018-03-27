import { Component, OnInit } from '@angular/core';
import { InternalTabsComponent } from '../internal-tabs/internal-tabs.component';



import {Router} from '@angular/router';
this.router= Router;
//import { relative } from 'path';/

@Component({
  selector: 'app-mtab-component',
  templateUrl: './mtab-component.component.html',
  styleUrls: ['./mtab-component.component.css']
})
export class MtabComponentComponent implements OnInit {




  constructor(private route:Router) {
      }

  ngOnInit() {
  }

 
}


