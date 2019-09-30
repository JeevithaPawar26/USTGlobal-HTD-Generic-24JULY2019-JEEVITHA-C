import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  carData:any='';
  cars=[
    {
      brand:'Wolkswagen',
      img:'https://image.shutterstock.com/image-photo/cars-sale-stock-row-car-260nw-636632101.jpg',
      description:'its a 6th edition of wagen world'
    },
    {
      brand:'Hyundai',
      img:'https://image.shutterstock.com/image-photo/geneva-mar-5-hyundai-i20-260nw-130933781.jpg',
      description:'i20 series of hyundai'
    },
    {
      brand:'Suzuki',
      img:'https://cdn.pixabay.com/photo/2019/06/29/09/51/suzuki-sx4-4305877__340.jpg',
      description:'its swift car of new edition'
    },
    {
      brand:'BMW',
      img:'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg',
      description:'a brand new BMW new series'
    },
    {
      brand:'Mercedes',
      img:'https://cdn.pixabay.com/photo/2016/12/03/18/57/amg-1880381__340.jpg',
      description:'mercedes benz provides this edition with high features'
    },
    {
      brand:'Audi',
      img:'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg',
      description:'audi the four rings logo car'
    },
    {
      brand:'Maruti',
      img:'https://image.shutterstock.com/image-photo/blue-compact-suv-car-sport-260nw-764866978.jpg',
      description:'every time any where old is gold maruti'
    },
    {
      brand:'Toyato',
      img:'https://cdn.pixabay.com/photo/2017/11/12/16/32/toyota-land-cruiser-2943058__340.jpg',
      description:'having the best selling and comfortable ratings'
    },
    {
      brand:'Ferari',
      img:'https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__340.png',
      description:'Its an foreign car,which is now importing to india'
    }
  ];
  constructor() { }
  sendCar(car){
    this.carData=car;
  }
  ngOnInit() {
  }

}
