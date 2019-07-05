import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() changeContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  multiplicar(): void {
    this.contador *= 2;
    this.changeContador.emit(this.contador);
  }

  dividir(): void {
    this.contador /= 2;
    this.changeContador.emit(this.contador);
  }

  resetNieto(newContador): void {
    this.contador = newContador;
    this.changeContador.emit(this.contador);
  }

}
