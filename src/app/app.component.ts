import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador') // con select, obtenemos la parte del estado que nos interesa
      .subscribe(contador => this.contador = contador);
  }

  incrementar(): void {
    this.store.dispatch(new IncrementarAction());
  }

  decrementar(): void {
    this.store.dispatch(new DecrementarAction());
  }

}
