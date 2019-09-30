import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  mobileData:any='';
  mobiles=[
    {
      brand:'HTC',
      img:'https://cdn.pixabay.com/photo/2015/09/05/21/12/htc-925375__340.jpg',
      description:'had good features but sale is down'
    },
    {
      brand:'Nokia',
      img:'https://cdn.pixabay.com/photo/2015/02/04/15/23/nokia-623939__340.jpg',
      description:'well known brand for battery mode popular'
    },
    {
      brand:'oppo',
      img:'https://image.shutterstock.com/image-vector/realistic-smartphone-blank-screen-isolated-260nw-640277947.jpg',
      description:'company where design of phones is not appreciable by customers but features do'
    },
    {
      brand:'one-plus',
      img:'https://cdn.pixabay.com/photo/2018/04/15/11/56/one-plus-3321494__340.jpg',
      description:'having most picture clarity as featured in iphone'
    },
    {
      brand:'motorola',
      img:'https://cdn.pixabay.com/photo/2017/08/06/18/16/mobile-2594848__340.jpg',
      description:'A first company to built smart phone'
    },
    {
      brand:'Samsung',
      img:'https://cdn.pixabay.com/photo/2017/04/26/16/06/mobile-2262928__340.jpg',
      description:'A leading phone brand'
    },
    {
      brand:'IphoneX',
      img:'https://cdn.pixabay.com/photo/2017/12/25/20/14/iphone-3039062__340.jpg',
      description:'Its an IOS version from Apple trending in market'
    }
  ]
  constructor() { }
  sendMobile(mobile){
    this.mobileData=mobile;
  }
  ngOnInit() {
  }

}
