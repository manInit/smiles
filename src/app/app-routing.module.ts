import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoveComponent } from './page-love/page-love.component';
import { PageAllComponent } from './page-all/page-all.component';
import { PageDeletedComponent } from './page-deleted/page-deleted.component';

const routes: Routes = [
  { path: '', component: PageAllComponent },
  { path: 'love', component: PageLoveComponent },
  { path: 'deleted', component: PageDeletedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
