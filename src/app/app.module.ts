import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './component/container/container.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/mainchar.reducers';
 

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
       { 
         mainChar : reducer 
       } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
