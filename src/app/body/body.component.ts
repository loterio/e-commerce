import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  headphone = {
    nome: 'Chuteira Masculina do Flamengo',
    imagem: 'background-image: url("../../chuteira.jpg");',
    valor: 140,
    quantidade: 2,
    valorTotal: 280
  };
  GT1 = {
    nome: 'Bola personalizada do Flamengo',
    imagem: 'background-image: url("../../bola.jpg");',
    valor: 100,
    quantidade: 8,
    valorTotal: 800
  };
  constructor() { }

  ngOnInit(): void {
  }

}
