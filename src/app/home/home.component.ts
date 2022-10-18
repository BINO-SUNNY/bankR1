import { Component, OnInit } from '@angular/core';
import { DataService } from '../servises/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ds:DataService) { }
  acno=""
  pass=""
  amount=""

  acno1=""
  pass1=""
  amount1=""

  ngOnInit(): void {
  }
  deposite(){
    var acno =this.acno
    var pass = this.pass
    var amount= this.amount

    const result =this.ds.deposite(acno,pass,amount)
    if(result){
      alert(amount+"balance and new balance"+result)
    }


  }
  withdraw(){
    var acno =this.acno1
    var pass = this.pass1
    var amount= this.amount1

    const result =this.ds. withdraw(acno,pass,amount)
    if(result){
      alert(amount+"balance and new balance"+result)
    }


  }



  

}
