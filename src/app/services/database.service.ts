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
}
