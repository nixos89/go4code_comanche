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


const appRoutes: Routes = [
  /*{ path: 'record/:id', component: RecordDetailsComponent },
  { path: 'main', component: MainComponent },  
  { path: '', redirectTo: 'main', pathMatch: 'full' },*/

  { path: 'posts', component: ListOfPostsComponent },
  { path: 'post', component: OnePostComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ListOfPostsComponent,
    OnePostComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ //registrujem servise obaveznoo!!!!!!
    PostsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
