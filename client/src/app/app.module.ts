import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListOfPostsComponent } from './list-of-posts/list-of-posts.component';
import { PostsService } from './list-of-posts/posts.service';
import { OnePostComponent } from './one-post/one-post.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UpdatePostComponent } from './update-post/update-post.component';

import { TokenInterceptorService } from 'app/security/token-interceptor.service';
import { JwtUtilsService } from 'app/security/jwt-utils.service';
import { CanActivateAuthGuardService} from 'app/security/can-activate-auth-guard.service';

import { AuthenticationService } from './security/authentication.service';
import { LoginComponent } from './login/login/login.component';


const appRoutes: Routes = [
  /*{ path: 'record/:id', component: RecordDetailsComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },*/
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: ListOfPostsComponent /*  , canActivate: [CanActivateAuthGuardService] */},
  { path: 'post/:id', component: OnePostComponent /* , canActivate: [CanActivateAuthGuardService] */},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
   declarations: [
      AppComponent,
      PageNotFoundComponent,
      ListOfPostsComponent,
      OnePostComponent,
      UpdatePostComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      HttpClientModule,
      NgxPaginationModule,
      RouterModule.forRoot( appRoutes,
      {enableTracing: true})
   ],
   providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    CanActivateAuthGuardService,
    JwtUtilsService,
    PostsService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
