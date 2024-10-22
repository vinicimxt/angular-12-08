import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from '../pipe/media.pipe';


@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [CommonModule,MediaPipe],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {


  nome:string = 'Vini';
  obj:any={'nome': 'Vini', 'idade':25};

  //Matriz

  alunos:any = [
    {'nome': 'Dani', 'nota1':8, 'nota2':9},
    {'nome': 'Vinicim', 'nota1':7 ,'nota2':8},
    {'nome': 'Leticia', 'nota1':3 ,'nota2':2},
    {'nome': 'Ricardo', 'nota1':7 ,'nota2':7}
  ];

  vendas:any = [
    {'nome': 'Ronaldo', 'janeiro':45.450, 'fevereiro':39.050, 'marco':39.546},
    {'nome': 'Julio', 'janeiro':40.435 ,'fevereiro':41.345, 'marco':40.456},
    {'nome': 'Pedro', 'janeiro':42.046 ,'fevereiro':45.670, 'marco':38.459}
  ];

}
