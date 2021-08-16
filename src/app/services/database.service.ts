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

  public DeleteManager(idManagement: any){
    return this.http.delete<any>(this.serviceUrl + `/api/DeleteManager${idManagement}`,)
  }

  public DeleteGroup(idGroup: any){
    return this.http.delete<any>(this.serviceUrl + `/api/DeleteGroup${idGroup}`,)
  }

  public DeleteTeacher(idTeacher: any){
    return this.http.delete<any>(this.serviceUrl + `/api/DeleteTeacher${idTeacher}`,)
  }

  public DeleteSchool(idSchool: any){
    return this.http.delete<any>(this.serviceUrl + `/api/DeleteSchool${idSchool}`,)
  }

  public UpdateManager(manager: any){
    return this.http.put<any>(this.serviceUrl + `/api/UpdateManager${manager.idManagement}`,manager)
  }

  public UpdateGroup(group: any){
    return this.http.put<any>(this.serviceUrl + `/api/UpdateGroup${group.idGroup}`,group)
  }

  public UpdateTeacher(teacher: any){
    return this.http.put<any>(this.serviceUrl + `/api/UpdateTeacher${teacher.idTeacher}`,teacher)
  }

  public UpdateSchool(school: any){
    return this.http.put<any>(this.serviceUrl + `/api/UpdateSchool${school.idSchool}`,school)
  }
}
