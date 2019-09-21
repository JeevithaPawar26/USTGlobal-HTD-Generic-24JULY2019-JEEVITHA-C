import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  message:any='';
  carData:any='';

  cars=[
    {
      brand:"i10",
      img:"https://cdn.pixabay.com/photo/2017/05/31/09/10/car-2359570__340.jpg",
      desc:"The Petrol engine is 1086 cc and 1197 cc while the LPG engine is 1086 cc. It is available with the transmission. Depending upon the variant and fuel type the i10 has a mileage of 16.95 to 20.36 kmpl. The i10 is a 5 seater Hatchback and has a length of 3585mm, width of 1595mm and a wheelbase of 2380mm."
    },
    {
      brand:"Audi",
      img:"https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg",
      desc:"Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide. "
    },
    {
      brand:"Lamborghini",
      img:"https://cdn.pixabay.com/photo/2018/12/13/23/44/car-3873997__340.jpg",
      desc:"Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi."
    },
    {
      brand:"Ferrari",
      img:"https://cdn.pixabay.com/photo/2017/11/09/01/49/ferrari-458-spider-2932191__340.jpg",
      desc:"Ferrari is an Italian luxury sports car manufacturer based in Maranello. Founded by Enzo Ferrari in 1939 out of Alfa Romeo's race division as Auto Avio Costruzioni, the company built its first car in 1940."
    }
  ]

  constructor() { }
  sendCar(c1){
    this.carData=c1;
    console.log(c1);
  }

  ngOnInit() {
  }

}
