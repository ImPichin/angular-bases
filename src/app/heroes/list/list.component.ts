import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public herosNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain'];
  public deletedHero?: string;

  removeLastHero():void{
    this.deletedHero = this.herosNames.pop();
  }

}
