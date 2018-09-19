import { Component, OnInit } from '@angular/core';
import { PostsService } from '../list-of-posts/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  constructor(private postsService : PostsService, private router: Router) 
  { 
    
  }

  ngOnInit() {
  }

}
