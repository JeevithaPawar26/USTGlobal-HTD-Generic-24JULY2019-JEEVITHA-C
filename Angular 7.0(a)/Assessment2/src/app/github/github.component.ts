import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  //Declare one property
  gitNews: any[]=[];
  hide='data';

  constructor(private http:HttpClient) { 
    http.get<any>('https://api.github.com/users')
    .subscribe(resData=>{
      this.gitNews=resData;
      console.log(this.gitNews);
    })
  }

  delete(){
   this.hide='hidden';
    //alert("data has been deleted")
    
  
  }

  ngOnInit() {
  }

}
