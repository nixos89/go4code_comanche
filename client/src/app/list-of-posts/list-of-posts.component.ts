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

  post2: Post = {
    id: 5,
    date: "12.12.2012",
    user: {
      firstName: "aaaa",
      email: "email",
      lastName: "prezime",
      password: "",
      posts: [],
      securityAuthority: {
        name: "sss"
      },
      username: "usserrr"
    },
    time: "",
    text: "komentarr",
    viewNumber: 5,
    comment: [],
    attachments: [],
    rating: 4

  }

  constructor(private postsService : PostsService, private router: Router) {
    this.getAll();
    this.posts.push(this.post2);
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

  viewDetails(id: number){
    this.router.navigate(['post/', id]);
  }

}
