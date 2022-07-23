import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent implements OnInit {

  constructor() { }

  soma(valor1: number, valor2: number, valor3: number) {
      return valor1 + valor2 + valor3;
  }

  soma2(valor1: number, valor2: number) {
      return valor1 + valor2;
  }

  ngOnInit(): void {
  }

}
