import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewForLoopComponent } from './new-for-loop/new-for-loop.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
// import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NewForLoopComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    IfElseComponent,
    ForLoopComponent
    // UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
