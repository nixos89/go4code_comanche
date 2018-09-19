import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostsService } from './posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-posts',
  templateUrl: './list-of-posts.component.html',
  styleUrls: ['./list-of-posts.component.css']
})
export class ListOfPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService : PostsService, private router: Router) {
    this.getAll();
  }

  ngOnInit() {
  }

  getAll(){
    this.postsService.findAll().subscribe(
      s => this.posts = s
    );

  }

  deletePost(id: number){
   this.postsService.deletePost(id).subscribe(
     s => this.getAll(),
     err=> console.log("err")
   );    
  }

  updatePost(id: number){
   this.router.navigate(['posts/edit', id]);
  }

}
