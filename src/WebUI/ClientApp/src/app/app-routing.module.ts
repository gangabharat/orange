import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TokenComponent } from './token/token.component';
import { NotFoundComponent } from './_shared/component/not-found/not-found.component';

export const routes: Routes = [

  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'todo', component: TodoComponent, canActivate: [AuthorizeGuard] },
  { path: 'token', component: TokenComponent, canActivate: [AuthorizeGuard] },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  //{ path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: '**', component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
