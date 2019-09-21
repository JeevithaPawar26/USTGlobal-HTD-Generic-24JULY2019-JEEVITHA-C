import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
data:any[]=[];


  constructor(private send:TaskService) { }
sendData(text){
  console.log(text);
  this.data=text;
  this.send.dat=this.data;
  text.reset();
}
  ngOnInit() {
  }

}
