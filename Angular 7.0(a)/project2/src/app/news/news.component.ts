import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newssData:any='';
  news=[
    {
      channel:'ndtv',
      img:'https://image.shutterstock.com/image-photo/camera-studio-broadcasting-journalists-reading-260nw-1212918049.jpg',
      description:'english news based on the recent technologies'
    },
    {
      channel:'star-news',
      img:'https://cdn.pixabay.com/photo/2015/11/07/11/07/channel-1030828__340.jpg',
      description:'News related to foreign countries such as trading and business'
    },
    {
      channel:'aaj-tak',
      img:'https://cdn.pixabay.com/photo/2018/09/19/13/39/weather-3688572__340.jpg',
      description:'Hindi news providing weather report'
    },
    {
      channel:'cnn',
      img:'https://cdn.pixabay.com/photo/2017/08/10/17/24/brand-2625249_960_720.png',
      description:'english news'
    },
    {
      channel:'udaya',
      img:'https://cdn.pixabay.com/photo/2017/10/28/18/02/cartoon-2897720__340.png',
      description:'Kannada news interview session'
    }
  ]
  constructor() { }
  sendNewss(newss){
    this.newssData=newss;
  }
  ngOnInit() {
  }

}
