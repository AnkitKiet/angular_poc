import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {User}  from './profiledialog/field';

export class UploadleadsDataTable extends DataSource<User> {

  constructor(private uploadleadsData: User[]) {
    super();
    console.log("datatable"+uploadleadsData[0].first);
  }

  connect(): Observable<User[]> {
      console.log("observe"+this.uploadleadsData[0].first);
    return Observable.of(this.uploadleadsData);
  }

  disconnect() {
    // No-op
  }

}
