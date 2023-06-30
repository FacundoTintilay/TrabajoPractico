import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
text: string;

constructor(){
  this.text="user";
}
cambiarTexto(): void{
  this.text="Facu";
}

}
