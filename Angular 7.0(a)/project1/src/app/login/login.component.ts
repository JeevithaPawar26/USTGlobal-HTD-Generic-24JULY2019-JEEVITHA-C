import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // push the loginForm object to the array
  users=[];

  constructor() { }
  printForm(loginForm : NgForm){
    console.log(loginForm.value);
    //push
    this.users.push(loginForm.value);
    loginForm.reset();
    console.log(this.users);
  }

  ngOnInit() {
  }

}
