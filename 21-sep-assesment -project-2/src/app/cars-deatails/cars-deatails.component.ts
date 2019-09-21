import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cars-deatails',
  templateUrl: './cars-deatails.component.html',
  styleUrls: ['./cars-deatails.component.css']
})
export class CarsDeatailsComponent implements OnInit {

  constructor() { }
  @Input() carInfo:any=" ";
  @Output() childEvent= new EventEmitter();

  ngOnInit() {
    this.childEvent.emit("Cars Details")
  }
}
