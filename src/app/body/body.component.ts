import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  p01 = {
    nome: 'Notebook',
    imagem: 'background-image: url("../../pc.jpg");',
    valor: 5600,
    quantidade: 4,
    valorTotal: 22400
  };
  p02 = {
    nome: 'Cavalo Mangalarga Marchador',
    imagem: 'background-image: url("../../horse.jpg");',
    valor: 10000,
    quantidade: 1,
    valorTotal: 10000
  };
  constructor() { }

  ngOnInit(): void {
  }

}
