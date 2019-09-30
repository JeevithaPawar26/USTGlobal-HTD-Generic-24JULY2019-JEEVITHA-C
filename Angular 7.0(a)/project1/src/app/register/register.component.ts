import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './custom.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  // create the object of formgroup
  registerForm = new FormGroup({
  name : new FormControl('',[Validators.minLength(3), Validators.required]),
  email: new FormControl('',[Validators.email, Validators.minLength(8),Validators.required,CustomValidator.noSpace]), 
})

get name(){
  return this.registerForm.get('name');
}
get email(){
  return this.registerForm.get('email');
}
printForm(registerForm)
{
  console.log(registerForm);
}
  ngOnInit() {
  }

}
