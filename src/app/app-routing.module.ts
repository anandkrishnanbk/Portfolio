import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { HomeComponent } from './home.component';
import {BlogComponent} from './blog.component';
import {ContactComponent} from './contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
  })
export class AppRoutingModule {}
