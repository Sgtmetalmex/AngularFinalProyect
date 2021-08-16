import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  serviceUrl = "http://localhost:3000";
  constructor(
    public http: HttpClient
  ) { }

  public Login(user: any) {
    return this.http.post(this.serviceUrl + '/api/ValidateUsers', user);
  }

  public GetTables(){
    return this.http.get(this.serviceUrl + '/api/GetAll')
  }

  public AddNewManager(row: any){
    return this.http.post(this.serviceUrl + '/api/AddManagement',row)
  }

  public AddNewGroup(row: any){
    return this.http.post(this.serviceUrl + '/api/AddGroup',row)
  }

  public AddNewTeacher(row: any){
    return this.http.post(this.serviceUrl + '/api/AddTeacher',row)
  }

  public AddNewSchool(row: any){
    return this.http.post(this.serviceUrl + '/api/AddSchool',row)
  }
}
