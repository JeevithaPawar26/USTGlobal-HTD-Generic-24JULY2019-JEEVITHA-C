import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data : any=[];

  constructor() { }
  //#form.value=ngForm;

  sendSubmit(data){
    this.data=data;
    console.groupCollapsed(this.data);
    alert("Data has been submitted")
  }

  ngOnInit() {
  }

}
