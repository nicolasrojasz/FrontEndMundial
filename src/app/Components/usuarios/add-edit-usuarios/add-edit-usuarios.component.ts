import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

//imports
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/services/loginServices/usuarios.service';

@Component({
  selector: 'app-add-edit-usuarios',
  templateUrl: './add-edit-usuarios.component.html',
  styleUrls: ['./add-edit-usuarios.component.css']
})
export class AddEditUsuariosComponent implements OnInit {

  fValidator:FormGroup = this.fb.group({
    'nombre':['',[Validators.required]],
    'clave':['',[Validators.required]],
    'id':['',]
  }); 



  constructor(
    private servicioUsuario:UsuariosService,
    private fb:FormBuilder,
  ) { }

  ListUsuarios$! : Observable<any[]>

  @Input() usuario:any;
  id?:number = 0;
  nombre?:string = '';
  clave?:string = '';

  ngOnInit(): void {
    this.id=this.usuario.id;
    this.nombre=this.usuario.nombre;
    this.ListUsuarios$ = this.servicioUsuario.get();
  }

  agregarUsuario(){
    var usuario = {
      nombre: this.nombre,
      clave: this.clave,
      tipo: 'admin'
    }
    this.servicioUsuario.post(usuario)
    .subscribe(res => {
      var closeModal = document.getElementById('add-edit-modal-close');
      if(closeModal){
        closeModal.click();
      }
      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = 'none';
        }
      },4000)
    })
  }

  updateUsuario(){
    var usuario = {
      id:this.id,
      nombre:this.nombre,
      clave:this.clave,
      tipo:'admin'
    }
    let a:any = this.id;
    let id:number=Number(a);
    this.servicioUsuario.put(id,usuario)
    .subscribe(res => {
      var closeModal = document.getElementById('add-edit-modal-close');
      if(closeModal){
        closeModal.click();
      }
      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = 'none';
          location.reload();
        }
      },4000)
    })
  }


}
