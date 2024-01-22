import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm!: FormGroup;
  constructor(private router:Router,private fb:FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      name:[''],
      mobileNumber:[''],
      email:[''],
      password:['']

    })
  }
  onsubmit() {
    const data = this.signUpForm.value;
    console.log("signUp data ==>" +JSON.stringify(data));
    
  }
}
