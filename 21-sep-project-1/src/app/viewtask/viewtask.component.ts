import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  arr:any[]=[];
  i:any[]=[];
  

  constructor(private sent:TaskService) { }

  ngOnInit() {
    this.arr=this.sent.dat;
    console.log(this.arr);

  }
  delete(i)
  {
    this.arr.splice(i,1);
  }
  

}
