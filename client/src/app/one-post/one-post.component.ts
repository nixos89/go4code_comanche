import { Component, OnInit } from '@angular/core';
import { PostsService } from '../list-of-posts/posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  post: Post = {
    datum: "",
    user: {
      firstName: "",
      email: "",
      lastName: "",
      password: "",
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

  value1: String = "fa fa-star"
  value2: String = "fa fa-star"
  value3: String = "fa fa-star"
  value4: String = "fa fa-star"
  value5: String = "fa fa-star"

  id: number;

  private sub: any;
  isDataAvailable: boolean;

  constructor(private postsService : PostsService, private route: ActivatedRoute, private router: Router) 
  { 
      
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.isDataAvailable = false;
      if(params['id'] != null){
        this.id = +params['id']; // (+) konvertuje string 'id' u broj
        //id postavljamo kao path parametar pomocu interpolacije stringa
        
        if(this.id != null )
        {
          this.postsService.findOne(this.id).subscribe(
            e => {
              this.post = e;
              this.colorStars();
            }
          )
        }
     }
   });
  }

  colorStars(){
    if(this.post.rating>=1){
      this.value1 = "fa fa-star checked"
    }
    if(this.post.rating>=2){
      this.value2 = "fa fa-star checked"
    }
    if(this.post.rating>=3){
      this.value3 = "fa fa-star checked"
    }
    if(this.post.rating>=4){
      this.value4 = "fa fa-star checked"
    }
    if(this.post.rating>=5){
      this.value5 = "fa fa-star checked"
    }
  }

  updatePost(id: number){
    this.postsService.updatePost(id, this.post);
  }

  deletePost(id: number){
    this.postsService.deletePost(id).subscribe(
      s => {
        this.router.navigate(['posts']);
      },
      err=> console.log("err")
    );    
   }

}
