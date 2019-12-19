import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { IfElseComponent } from './if-else/if-else.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
	{path:'', component: HomeComponent},
	{path:'about', component: AboutComponent},
	{path:'contact', component: ContactComponent},
	{path:'ifelse', component: IfElseComponent},
	{path:'forloop', component: ForLoopComponent}
	// {path:'userdetails', component: UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
