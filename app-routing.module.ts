import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAccountComponent } from './new-account/new-account.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
	{
		path:'create-account',
		component:NewAccountComponent
	},
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
