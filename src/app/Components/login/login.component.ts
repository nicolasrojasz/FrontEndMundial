import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

//imports
import { LoginService } from 'src/app/services/loginServices/login.service';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('',[Validators.required]);
  matcher = new MyErrorStateMatcher();


  constructor(
    private servicioLogin:LoginService,
    private router:Router

  ) { }

  //variables del formulario
  nombre?:string = '';
  clave?:string = '';

  ngOnInit(): void {
  }

  login(){
    var usuario ={
      id:0,
      nombre:this.nombre,
      clave:this.clave,
      tipo:'admin'
    }
    var response= this.servicioLogin.post(usuario).subscribe(
      {
      next:(v)=> {
        console.log(v);
        var response:any=v;
        this.servicioLogin.GuardarToken(response.token);
        this.router.navigate(['/inicio']);
        //metodo reload()
        //window.location.reload(forceGet)
      },
      error:(e)=>{
        console.error(e);
        alert("Datos inicio sesión incorrectos !")} ,

      complete:()=> console.info('login completo')
      });
  }

}
