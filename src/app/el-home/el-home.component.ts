import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-el-home',
  templateUrl: './el-home.component.html',
  styleUrls: ['./el-home.component.css']
})
export class ElHomeComponent implements OnInit {

  constructor(
    public db: DatabaseService,
    public loadingPanel: LoadingService
  ) { }
  
  managerList: any = [];
  updateManagers: any = [];

  groupList: any = [];
  updateGroups: any = [];

  teacherList: any = [];
  updateTeachers: any = [];


  schoolList: any = [];
  updateSchools: any = [];

  public newManager: any = {};
  public newGroup: any = {};
  public newSchool: any = {};
  public newTeacher: any = {};
    
  ngOnInit(): void {
    this.RetrieveTables();
  }

  RetrieveTables() {
    this.loadingPanel.show();
    this.db.GetTables().subscribe((response: any) => {
      this.managerList = response.management;
      this.groupList = response.groups;
      this.teacherList = response.teachers;
      this.schoolList = response.schools;
      this.loadingPanel.hide();
    });
  }

  AddManager() {
    this.db.AddNewManager(this.newManager).subscribe((response: any) => {

      response > 0 ? window.location.reload() : alert("No Rows Inserted");
    });
  }

  AddGroup() {
    this.db.AddNewGroup(this.newGroup).subscribe((response: any) => {

      response > 0 ? window.location.reload() : alert("No Rows Inserted");
    });
  }

  AddTeacher() {
    this.db.AddNewTeacher(this.newTeacher).subscribe((response: any) => {

      response > 0 ? window.location.reload() : alert("No Rows Inserted");
    });
  }

  AddSchool() {
    this.db.AddNewSchool(this.newSchool).subscribe((response: any) => {

      response > 0 ? window.location.reload() : alert("No Rows Inserted");
    });
  }

  DeleteManager(id: any) {
    this.db.DeleteManager(id).subscribe((res: any) => {
      alert(res);
      if (res != "invalid Id")
        window.location.reload()
    })
  }

  DeleteGroup(id: any) {
    this.db.DeleteGroup(id).subscribe((res: any) => {
      alert(res);
      if (res != "invalid Id")
        window.location.reload()
    })
  }

  DeleteTeacher(id: any) {
    this.db.DeleteTeacher(id).subscribe((res: any) => {
      alert(res);
      if (res != "invalid Id")
        window.location.reload()
    })
  }

  DeleteSchool(id: any) {
    this.db.DeleteSchool(id).subscribe((res: any) => {
      alert(res);
      if (res != "invalid Id")
        window.location.reload()
    })
  }

  UpdateManager(manager: any) {
    this.db.UpdateManager(manager).subscribe((res: any) => {
      alert(res);
      if (res != "invalid Id")
        window.location.reload()
    })
  }

  UpdateGroup(manager: any) {
    this.db.UpdateGroup(manager).subscribe((res: any) => {
      alert(res);
      if (res != "invalid Id")
        window.location.reload()
    })
  }

  UpdateTeacher(manager: any) {
    this.db.UpdateTeacher(manager).subscribe((res: any) => {
      alert(res);
      if (res != "invalid Id")
        window.location.reload()
    })
  }

  UpdateSchool(manager: any) {
    this.db.UpdateSchool(manager).subscribe((res: any) => {
      alert(res);
      if (res != "invalid Id")
        window.location.reload()
    })
  }

}
