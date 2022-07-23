import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtracao',
  templateUrl: './subtracao.component.html',
  styleUrls: ['./subtracao.component.css']
})
export class SubtracaoComponent implements OnInit {

  constructor() { }

  subtracao(valor1: number, valor2: number, valor3: number) {
      return valor1 - valor2 - valor3;
  }

  subtracao2(valor1: number, valor2: number) {
      return valor1 - valor2;
  }
  ngOnInit(): void {
  }

}
