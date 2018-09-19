import { Component, OnInit } from '@angular/core';
import { PostsService } from '../list-of-posts/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post: Post = {
    datum: "",
    user: {
      id: 1,
      firstName: "stefan",
      email: "stefanbokic@gmail.com",
      lastName: "ssss",
      password: "wdasvqwfesd",
      posts: [],
      securityAuthority: {
        name: ""
      },
      username: ""
    },
    time: "",
    text: "",
    viewNumber: 0,
    comment: [],
    attachments: [],
    rating: 0

  }

  id: number;

  private sub: any;
  isDataAvailable: boolean;

  constructor(private postsService : PostsService, private router: Router) 
  { 
      
  }

  ngOnInit() {

  }

  save(){
    this.postsService.addPost(this.post).subscribe(
      s => {
        this.post = s;
        this.router.navigate(['posts']);
      },
      err=> console.log("err")
    );    
  }

  goBackPost(){
    this.router.navigate(['posts']);
  }

}
