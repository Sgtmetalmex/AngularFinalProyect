import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-el-login',
  templateUrl: './el-login.component.html',
  styleUrls: ['./el-login.component.css']
})
export class ElLoginComponent implements OnInit {

  public email;
  public pass;

  constructor(
    public db: DatabaseService,
    private router: Router,
    public loadingPanel: LoadingService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  ValidateUser() {
    let user: any = {
      "email": this.email,
      "pass": this.pass
    }

    this.loadingPanel.show();

    this.db.Login(user).subscribe((response: any) => {
      let res = response;;

     localStorage.setItem("role",res.position);
       
     !res ? alert("Incorrect Data"): this.router.navigate(['/home']);;
      

      this.loadingPanel.hide();
    });
  }
  
}
