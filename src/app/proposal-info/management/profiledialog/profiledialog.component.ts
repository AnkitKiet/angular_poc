
import { Component, OnInit,Inject,ViewChild,forwardRef} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';

import {User} from './field';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
// import { userInfo } from 'os';
import { DataService } from "../../../services/dataService";
import {ManagementComponent} from "../management.component";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-profiledialog',
  templateUrl: './profiledialog.component.html',
  styleUrls: ['./profiledialog.component.css']
})
export class ProfiledialogComponent implements OnInit {

  @ViewChild(forwardRef(() =>ManagementComponent))
  private myChild: ManagementComponent;


  public user:User;
  empList:Array<User>=[];
 addressobj:ManagementComponent;



  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private data1: DataService,private dialogRef: MatDialogRef<ManagementComponent>) {
    this.user={first:'',second:'',third:'',fourth:'',fifth:''};

  }

  ngOnInit() {
  }

  onOkClick(){
    console.log("helloeoekoekkeo");
    this.dialogRef.close(this.data1.getUserData());
  }

 onClick(value:User){
  console.log("hello" + value.first);
  this.empList.push(value);
  this.data1.setUserData(this.empList);
   }


}
