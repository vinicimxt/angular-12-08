import { Component } from '@angular/core';

@Component({
  selector: 'app-quinto-componente',
  standalone: true,
  imports: [],
  templateUrl: './quinto-componente.component.html',
  styleUrl: './quinto-componente.component.css'
})
export class QuintoComponenteComponent {


   //Primeira função para exibir mensagem

   mensagem()
   {
     alert('Todo homem forte tem o dever de proteger');
   }
 
}
