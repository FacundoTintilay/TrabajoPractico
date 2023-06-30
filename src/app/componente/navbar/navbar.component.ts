import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  titulo: string;
  icono: string;

  constructor(){
    this.titulo ="TP";
    this.icono ="https://www.vhv.rs/dpng/d/35-357103_transparent-nier-automata-png-png-download.png";
  }

}
