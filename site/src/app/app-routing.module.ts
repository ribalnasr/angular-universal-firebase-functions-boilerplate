import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [RouterModule.forRoot([
		{
			path: '',
			loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
		},
		{
			path: 'login',
			loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
		},
		{
			path: ':projectId/us-central1/ssr',
			redirectTo: '',
			pathMatch: 'prefix'
		}
	])],
	exports: [RouterModule]
})
export class AppRoutingModule { }