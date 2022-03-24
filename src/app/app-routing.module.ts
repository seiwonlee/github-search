import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBaseComponent } from './pages/layout-base/layout-base.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: LayoutBaseComponent, 
      children: [{ path: '', component: SearchComponent }]
  },
  { path: 'search', component: LayoutBaseComponent, 
      children: [{ path: '', component: SearchComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
