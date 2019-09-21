import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsDeatailsComponent } from './cars-deatails.component';

describe('CarsDeatailsComponent', () => {
  let component: CarsDeatailsComponent;
  let fixture: ComponentFixture<CarsDeatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsDeatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
