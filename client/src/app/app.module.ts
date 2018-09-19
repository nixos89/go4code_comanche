import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HInterceptorService } from './h-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListOfPostsComponent } from './list-of-posts/list-of-posts.component';
import { PostsService } from './list-of-posts/posts.service';
import { OnePostComponent } from './one-post/one-post.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UpdatePostComponent } from './update-post/update-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { CommentService } from './comment.service';
import { LoginComponent } from './login/login/login.component';
import { AuthenticationService } from './security/authentication.service';
import { CanActivateAuthGuardService } from './security/can-activate-auth-guard.service';
import { JwtUtilsService } from './security/jwt-utils.service';

const appRoutes: Routes = [
  /*{ path: 'record/:id', component: RecordDetailsComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },*/

  { path: 'posts', component: ListOfPostsComponent },
  { path: 'post/:id', component: OnePostComponent },
  { path: 'post/edit/:id', component: UpdatePostComponent },
  { path: 'post/add/post', component: AddPostComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
   declarations: [
      AppComponent,
      PageNotFoundComponent,
      ListOfPostsComponent,
      OnePostComponent,
      UpdatePostComponent,
      LoginComponent,
      AddPostComponent
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
    CommentService,
    PostsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HInterceptorService,
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
