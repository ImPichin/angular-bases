import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'iron man';
  public age: number  = 45;

  get capitalizedName():string{
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${this.age}`;
  }

  changeHero():void {
    this.name = 'spider man'
  }

  changeAge():void{
    this.age = 26
  }

  resetForm():void {
    this.name = 'iron man';
    this.age = 45;
  }
}
