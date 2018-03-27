import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {
    list:any;
    getUserData(){ 
        console.log(this.list);

       return this.list; 
    } 
    setUserData(data:any[]){
        this.list = data;
    }

}
