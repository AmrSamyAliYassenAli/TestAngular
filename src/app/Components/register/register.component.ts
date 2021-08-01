import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userData: any = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password:  new FormControl('', [
      Validators.required
    ]),
    confirmPassword:new FormControl('', [
      Validators.required
    ]),
    phone: new FormControl('', [
      Validators.required
    ]),
    gender : new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private toastr: ToastrService) { }

  IsValidPassword():boolean {
    if (this.userData.password === this.userData.confirmPassword) return true;
    return false;
  }

  Register() {
    if (this.IsValidPassword()) {

      this.toastr.success('Welcome!', this.userData.name);
    } else {
      this.toastr.error('Error!');
    }
  }
}
