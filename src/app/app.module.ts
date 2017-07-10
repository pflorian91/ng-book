import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  HttpModule,
  JsonpModule
} from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { TrackComponent } from './track/track.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import {
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';
import {
  AUTH_PROVIDERS,
  AuthService
} from './auth.service';
import { LoggedInGuard } from './logged-in.guard';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  // basic routes
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'contactus',
    redirectTo: 'contact'
  },
  
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  
  // authentication demo
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  },
  // nested
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      /*{
       path: 'main',
       component: MainComponent
       },
       {
       path: 'more-info',
       component: MoreInfoComponent
       },*/
      {
        path: ':id',
        component: ProductComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    SearchComponent,
    TrackComponent,
    LoginComponent,
    ProtectedComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes),
    // ProductsModule
  ],
  providers: [
    // uncomment this for "hash-bang" routing
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
    // AUTH_PROVIDERS,
    LoggedInGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
