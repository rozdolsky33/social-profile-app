import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostresolverService implements Resolve<Post> {
  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    const postId: number = route.params.postId;
    return this.postService.getOnePostById(postId);
  }
}
