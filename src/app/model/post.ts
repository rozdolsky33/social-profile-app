import { Comment } from './comment';

export class Post {
  public id: number;
  public name: string;
  public caption: string;
  public postDate: Date;
  public username: string;
  public location: string;
  public likes: number;
  public commentsLikes: Comment[];
}
