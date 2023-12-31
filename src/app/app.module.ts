import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/components/counter.module';
import { DbzModule } from './dbz/dbz.module';
// import { CounterComponent } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroesModule } from './heroes/heroes.module';
// import { ListComponent } from './heroes/list/list.component';
// import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    // HeroComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
