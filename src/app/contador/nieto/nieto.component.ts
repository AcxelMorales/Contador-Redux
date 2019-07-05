import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() changeContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  reset(): void {
    this.contador = 0;
    this.changeContador.emit(this.contador);
  }

}
