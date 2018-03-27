import { Component, OnInit,ChangeDetectorRef,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA} from  '@angular/material/dialog'
import {ProfiledialogComponent}  from './profiledialog/profiledialog.component';
import { DataService } from "../../services/dataService";
import {User}  from './profiledialog/field';
import { UploadleadsDataTable } from "./add-datable";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  
  public user:User;
 
showList : boolean;

  displayedColumns = ['first', 'second', 'third','fourth','fifth'];
  datasource_uploadleads: UploadleadsDataTable;
  empList:User[]=[
    {first:'hello',
    second:'hel',
    third:'d',
    fourth:'e',
   fifth:'g'}
  ];

  ngOnInit() {
    this.datasource_uploadleads = new UploadleadsDataTable(this.empList);
  }

  constructor(public dialog: MatDialog,private _changeDetectorRefs: ChangeDetectorRef,private data: DataService) {
    this.showList = false;
   
  }


  openDialog() {
    let dialogRef = this.dialog.open(ProfiledialogComponent, {
      
    });
    dialogRef.beforeClose().subscribe(result => {

      console.log("result"+result);
          this.empList = this.empList.concat(result);
          this.datasource_uploadleads = new UploadleadsDataTable(this.empList);

      //console.log("data"+this.datasource_uploadleads[0].first);
      this._changeDetectorRefs.detectChanges();
      
    });

}


public fetchdata(){
  this.showList = true;
  this.empList = this.data.getUserData();
  console.log("nishtha-->"+this.empList[0]);
 // console.log(" dhjchjvkxc"+ELEMENT_DATA[0].first);
} 


@ViewChild(MatPaginator) paginator: MatPaginator;

/**
 * Set the paginator after the view init since this component will
 * be able to query its view for the initialized paginator.
 */
ngAfterViewInit() {
 //  this.dataSource.paginator = this.paginator;
}
}

