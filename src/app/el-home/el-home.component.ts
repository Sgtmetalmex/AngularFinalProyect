import { Component, OnInit } from '@angular/core';
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
  rows: any =[];
  managerList: any = [];
  groupList: any = [];
  teacherList: any = [];
  schoolList: any = [];
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
}
