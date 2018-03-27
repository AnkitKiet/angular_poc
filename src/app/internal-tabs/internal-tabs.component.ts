import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes ,PreloadAllModules ,Router} from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';



@Component({
  selector: 'app-internal-tabs',
  templateUrl: './internal-tabs.component.html',
  styleUrls: ['./internal-tabs.component.css']
})
export class InternalTabsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
     this.route.navigateByUrl('/generalinfo');
  }

  tabLinks = [
    {label: 'General Info', link: ''},
    {label: 'Checks', link: ''},
    {label: 'Facility Info', link: ''},
    {label: 'Collateral Info', link: ''},
    {label: 'Financial Info', link: ''},
    {label: 'Proposal Info', link: ''},
    {label: 'Account Monitoring', link: ''},
    
       {label: 'Account Profitablity', link: ''},
         {label: 'Risk Info', link: ''},
   
  ];

  onLinkClick(event: MatTabChangeEvent) {
    console.log('event => ', event);
    console.log('index => ', event.index);
    console.log('tab => ', event.tab);
  switch(event.index){
    case 0 :  this.route.navigateByUrl('/generalinfo');
    break;
    case 1 :  this.route.navigateByUrl('/checks');
    break;
    case 2 :  this.route.navigateByUrl('/facility-info');
    break;
    case 3 :  this.route.navigateByUrl('/');
    break;
    case 4 :  this.route.navigateByUrl('/');
    break;
    case 5 :  this.route.navigateByUrl('/proposal-info');
    break;  
    case 6 :  this.route.navigateByUrl('/');
    break;
      case 8 :  this.route.navigateByUrl('/risk-info');
    break;
    default:  console.log("default");
    this.route.navigate(['/facility-info']);

    
  }
  
  }



}
