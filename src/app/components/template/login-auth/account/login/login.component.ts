import { Component, OnInit } from '@angular/core';

import { AccountService } from './../shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }

  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      const result = await this.accountService.login(this.login);
      console.log('Login efetuado: ${result}');

      this.router.navigate(['']);
    } catch (error){
      console.error(error);
    }
  }

}