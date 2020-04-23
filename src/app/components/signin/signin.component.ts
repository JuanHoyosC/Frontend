import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.auth.signin(this.user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/task-private']);
      },
      err => console.log(err)
    )
  }

}
