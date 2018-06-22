import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FoodItem } from './foodItem';
import { DatePipe } from './datePipe';
import { FormsModule }   from '@angular/forms';
import { PageDefault }    from './pagedefault';
import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { routing }        from './routing';
import { DetailComponent} from './detail';

@NgModule({
  declarations: [
    AppComponent,
    FoodItem,
    DatePipe,
    PageDefault,
    AboutComponent,
    HomeComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
