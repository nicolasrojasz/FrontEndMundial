import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

menuResponsive(){
const elemento = document.querySelector('.button-responsive');
const elemento2 = document.querySelector('.toolbar-responsive');
if(elemento?.classList.contains('visible')){
elemento?.classList.remove('visible');
elemento2?.classList.remove('visible');
}else{
  elemento?.classList.add('visible');
  elemento2?.classList.add('visible');
}

}

closeResponsive(){
const elemento = document.querySelector('.button-responsive');
const elemento2 = document.querySelector('.toolbar-responsive');

elemento?.classList.remove('visible');
elemento2?.classList.remove('visible');

}

}
