import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';


@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [
    BrowserModule,
    InternalDefensesModule 
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }