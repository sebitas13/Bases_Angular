import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    public name : string = 'sebas';
    public age : number = 13;

    public get capitalizar() : string{   //los get actuan como propiedades
      return this.name.toLocaleUpperCase();
    }

    public getHerodescription() : string {
      return `${this.name} - ${this.age}`
    }

    public changeName() : void {
        this.name = 'Spiderman';
    }

    public changeAge() : void {
        this.age = 15;
    }

    public resetForm() : void {
       this.name = 'sebas';
       this.age = 13;
    }
}
