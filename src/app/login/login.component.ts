import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../servises/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//one way binding

     // *ts fil to html(ts to view)

       //method 1(string interpoletion systax{{veriable name}})
   aim = "HELP"

       //method 2 (property binding: synstax:[attribute]="verable name")
  ac = "AC NUMBER"
  ps = "PASSWORD"


  acno = ""
  pass = ""


  

//conned two componts(dependcy injection)

  constructor(private home:Router ,private ds:DataService) { }

  ngOnInit(): void {
  }
  accnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno);
  }

  pswdChange(event: any) {
    this.pass = event.target.value
    console.log(this.pass);

  }


//event buding or $evant binding

  login() {
    var acno = this.acno
    var pass = this.pass
    const result = this.ds.login(acno,pass)
    if (result) {

        //conneted two componts
        this.home.navigateByUrl('home')
      }
      


  }







  // temlate retterauns varable 

  // login(a:any,p:any) {
  //   var acno = a.value
  //   var pass = p.value
  //   let db = this.db
  //   if (acno in db) {
  //     if (pass == db[acno]["password"]) {
  //       alert("login succesfully")
  //     }
  //     else {
  //       alert("increct password")
  //     }
  //   }
  //   else {
  //     alert("user does not exit...")
  //   }


  // }
  

}
