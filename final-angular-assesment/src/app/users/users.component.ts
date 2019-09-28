import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  jsonNews: any[]=[];
  constructor(private http: HttpClient){
    http.get<any>('https://jsonplaceholder.typicode.com/users')
    .subscribe(resData=>{
      this.jsonNews=resData;
      console.log(this.jsonNews);
    })

  }
  ngOnInit() {
  }

}
