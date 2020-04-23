import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from  '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    this.auth.signup(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/task-private']);
      },
      err => console.log(err)
    )
  }

}
