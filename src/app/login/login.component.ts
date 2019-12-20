import { Component, OnInit } from '@angular/core';
import { LogingService } from './loging.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LogingService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) {
        let f = fragment.match(/^(.*?)&/);
        let token: string = f[1].replace('access_token=', '');
        console.log(token);
        if (token) {
          console.log('token');
          console.log(token);
          this.loginService.setToken(token);
          this.router.navigate(['']);
        }
      }
    })

  }

  login() {
    this.loginService.login().then((url: string) => {
      window.location.href = url;
    }).catch(error => console.log(error));
  }
}
