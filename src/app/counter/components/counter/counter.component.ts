import { Component } from '@angular/core';

@Component({
  selector : 'app-counter',
  template : `

  <h5>Counter {{counter}}</h5>


  <button (click)="increment(1)" >+1</button>
  <button (click)="reset()" >reset</button>
  <button (click)="increment(-1)">-1</button>
  `
})
export class CounterComponent{

    public counter:number = 10;

    public increment(value:number) : void{
          this.counter +=value;
    }

    public reset() : void {
      this.counter = 10;
    }
}
