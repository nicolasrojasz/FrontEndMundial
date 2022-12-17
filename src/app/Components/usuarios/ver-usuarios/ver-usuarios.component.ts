import { Component, OnInit } from '@angular/core';

//imports
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/services/loginServices/usuarios.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css']
})
export class VerUsuariosComponent implements OnInit {

  ListUsuarios$!: Observable<any[]>
  

  //modal
  title: string = '';
  modal: boolean = false;
  usuario: any;


  constructor( 
    private servicioUsuario:UsuariosService,

  ) { }

  ngOnInit(): void {
    this.ListUsuarios$=this.servicioUsuario.get();
    console.log(this.ListUsuarios$);
  }


  modalAdd(){
    this.usuario ={
      id:0,
      nombre:null,
      clave:null,
      tipo:null
    }
    this.title = 'Agregar Usuario';
    this.modal=true;
  }

  modalEdit(item: any) {
    this.title = 'Editar Usuario';
    this.usuario = item;
    this.modal = true
  }

  modalclose() {
    this.modal = false;
    this.ListUsuarios$ = this.servicioUsuario.get();
  }


  delete(item: any) {
    if (confirm(`Esta seguro de eliminar el registro  ${item.id}`)) {
      this.servicioUsuario.delete(item.id).subscribe(() => {
        var closeModal = document.getElementById('add-edit-modal-close');
        if (closeModal) {
          closeModal.click();
        }
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = 'block';
        }
        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = 'none';
            location.reload();
          }
        }, 4000);
        this.ListUsuarios$ = this.servicioUsuario.get();
      })
    }
  }

}
