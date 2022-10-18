import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  db : any = {
    1000: { "acno": 1000, "username": "nobe", "password": 1000, "balance": 5000 },
    1001: { "acno": 1001, "username": "no name", "password": 1001, "balance": 5000 }

  }


  constructor() { }
  login(acno:any,pass:any) {
    
    let db = this.db
    if (acno in db) {
      if (pass == db[acno]["password"]) {
        alert("login succesfully")
        return true

      }
      else {
        alert("increct password")
        return false
      }
    }
    else {
      alert("user does not exit...")
      return false
    }


  }
  
  register(username:any,acno:any,password:any){
    let db =this.db
    
    if(acno in db){
      return false
    }
    else{
      // insert in db
      db[acno] ={
        acno,
        username,
        password,
        "balance":0
      }
      return true

    }
  }

  deposite(acno:any,password:any,amt:any){
    let db = this.db
    var amount = parseInt(amt)
    if(acno in db){
      if(password==db[acno]["password"]){
        db[acno]["balance"]+=amount
        return db[acno]["balance"]

      }
      else{
        alert("increcct password")
        return false
      }

    }
    else{
      alert("ussr does not exist..")
      return false
    }

  }

  withdraw(acno:any,password:any,amt:any){
    let db = this.db
    var amount = parseInt(amt)
    if(acno in db){
      if(password==db[acno]["password"]){

        if(db[acno]["balance"]>amount){

          db[acno]["balance"]-=amount
        return db[acno]["balance"]


        }
        else{
          alert("insuffisant balance")
          return false
        }
        
      }
      else{
        alert("increcct password")
        return false
      }

    }
    else{
      alert("ussr does not exist..")
      return false
    }

  }



}
