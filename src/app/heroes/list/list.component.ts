import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  public heroesNames : String[] = ['Spiderman','Hulk','Thor','Sebas'];
  public heroDeleted? : String;

  public deleteHero() : void {
      this.heroDeleted = this.heroesNames.pop();
      console.log(this.heroesNames.length);
      console.log(this.heroDeleted);
  }



}
