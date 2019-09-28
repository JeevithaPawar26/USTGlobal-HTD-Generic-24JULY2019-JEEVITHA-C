import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {

  inputData='';


  userData:any[]=[
    {id:101,name:"raj"},
    {id:102,name:"ram"},
    {id:103,name:"rao"},
  ]
  constructor() { 
    console.log(this.userData);
  }
   submit(title){
     this.inputData=title;
    
   }

   submitT(task){
   console.log(task.data);
   }

  ngOnInit() {
  }

}


