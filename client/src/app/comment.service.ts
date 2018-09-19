import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from './model/comment';

@Injectable()
export class CommentService {

  constructor(private http: HttpClient){
  }

  addComment(newComment: Comment, id: number): Observable<Comment>{
    return this.http.post<Comment>(`/api/posts/${id}/comments`,JSON.stringify(newComment));
  }

  findOne(id: number): Observable<Comment>{
    //'api/subject' + id === `/api/subject/${id}
    return this.http.get<Comment>(`/api/comments/${id}`);
  }
  findOneByPostId(id: number): Observable<Comment[]>{
    //'api/subject' + id === `/api/subject/${id}
    return this.http.get<Comment[]>(`/api/posts/${id}/comments`);
  }

  findAll(): Observable<Comment[]>{
    //'api/subject' + id === `/api/subject/${id}
    return this.http.get<Comment[]>('/api/comments');
  }

  deleteComment(id: number, idPost: number): Observable<{}>{
    console.log(id);
    return this.http.delete(`/api/posts/${idPost}/comments/${id}`);
  }

  updateComment(id: number, post: Comment) : Observable<Comment> {
    return this.http.put<Comment>(`/api/comments/${id}`, post);
  }

}
