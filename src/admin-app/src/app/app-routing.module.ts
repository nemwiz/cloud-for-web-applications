import {NgModule} from '@angular/core';
import {RouterModule, Routes, UrlSegment} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdminPageComponent} from './admin-page/admin-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    matcher: (url) => {
      if (url.length === 1) {
        return {
          consumed: url,
          posParams: {
            pageName: new UrlSegment(url[0].path, {})
          }
        }
      }
      return null
    }, component: AdminPageComponent
  },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
