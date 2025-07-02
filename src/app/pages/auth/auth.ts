import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { BaseForm } from '../../shared/utils/base.form';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.html',
  styleUrl: './auth.scss'
})
export class Auth implements OnInit, OnDestroy {
  hide = true;

  loginForm;

  constructor (private fb:FormBuilder, public baseForm: BaseForm){
    this.loginForm = this.fb.group({
      username: ['',[Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required, Validators.minLength(3)]]
    });
    console.log("init constructor")
  }
  ngOnInit(): void {
    console.log("init Oninit")
  }

  ngOnDestroy(): void {
    console.log("destroy")
  }
}
