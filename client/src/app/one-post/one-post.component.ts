import { Component, OnInit } from '@angular/core';
import { PostsService } from '../list-of-posts/posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
import { CommentService } from '../comment.service';
import { Comment } from '../model/comment';

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
    comments: [],
    attachments: [],
    rating: 0

  }

  value1: String = "fa fa-star"
  value2: String = "fa fa-star"
  value3: String = "fa fa-star"
  value4: String = "fa fa-star"
  value5: String = "fa fa-star"

  id: number;

  myTextarea: String = "";
  listOfComments: Comment[] = [];
  

  private sub: any;
  isDataAvailable: boolean;

  constructor(private postsService : PostsService, private route: ActivatedRoute, private router: Router, private commentService : CommentService) 
  { 
     // this.listOfComments.push("aaaaaa");
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
              this.listOfComments = this.post.comments;
              //this.commentService.findOneByPostId(this.id).subscribe(
                //this.listOfComments = this.post.comments;
               /* s => {
                  this.post.comments = s
                }*/
             // )
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
    this.router.navigate(['post/edit', id]);
  }

  deletePost(id: number){
    this.postsService.deletePost(id).subscribe(
      s => {
        this.router.navigate(['posts']);
      },
      err=> console.log("err")
    );    
   }


  buttonClick(myTextarea: String){
      if (myTextarea != '') {
          //this.listOfComments.push(myTextarea);
          let newComment: Comment= {
            commentText: myTextarea,
            user: {
              id: 1,
              firstName: "aaaa",
              email: "email",
              lastName: "prezime",
              password: "",
              posts: [],
              securityAuthority: {
                name: "sss"
              },
              username: "usserrr"
            }
          }

          this.commentService.addComment(newComment, this.post.id ).subscribe(
            s => {
               /* this.postsService.findOne(this.post.id).subscribe(
                  z => {
                    this.post = z;
                  }
          )*/
            // this.listOfComments.push(s);
            },
            err=> console.log("err")
          );    
          myTextarea = "";
      }
  }

  deleteComment($event){
      this.listOfComments.splice($event, 1);
  }


}

