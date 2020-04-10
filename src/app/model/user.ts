import { Post } from './post';

export class user {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  bio: string;
  post: Post[];
  likedPost: Post[];
}
