import { Component } from '@angular/core';

@Component({
  selector: 'app-sexto-componente',
  standalone: true,
  imports: [],
  templateUrl: './sexto-componente.component.html',
  styleUrl: './sexto-componente.component.css'
})
export class SextoComponenteComponent {

//variavel de imagem

imagem: string = "dia.jpg";
texto: string = "dia";

//função para alterar a imagem
alterarImagem(){
  if(this.imagem === 'dia.jpg'){
    this.imagem = 'noite.jpg';
  }else {
    this.imagem = 'dia.jpg';
  }

  if(this.texto === 'dia'){
    this.texto = 'noite';
  }else{
    this.texto = 'dia';
  }
}


}
