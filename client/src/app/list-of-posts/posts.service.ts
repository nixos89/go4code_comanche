import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {
  }

  addPost(newPost: Post): Observable<Post> {
    return this.http.post<Post>('/api/posts', JSON.stringify(newPost));
  }

  findOne(id: number): Observable<Post> {
    return this.http.get<Post>(`/api/posts/${id}`);
  }

  findAll(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts');
  }

  deletePost(id: number): Observable<{}> {
    console.log(id);
    return this.http.delete(`/api/posts/${id}`);
  }

  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`/api/posts/${id}`, post);
  }

}
