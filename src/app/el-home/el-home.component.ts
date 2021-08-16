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

  managerList: any = [];
  groupList: any = [];
  teacherList: any = [];
  schoolList: any = [];
  public newManager: any = {};


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

  AddManager(){
      this.newManager = {};
  }
}
