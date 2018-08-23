import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
//import { PcsComponent } from './pcs/pcs.component';
import { PcDetailComponent } from './pc-detail/pc-detail.component';
import { MessagesComponent } from './messages/messages.component';
 




@NgModule({
  declarations: [
    AppComponent,
   // PcsComponent,
    PcDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }