import { Photos } from './resources/photos';
import { Comments } from './resources/comments';

export class SDKApplication {
  photos: Photos;
  comments: Comments;

  constructor(config: { authToken: string; baseUrl?: string }) {
    this.photos = new Photos(config);
    this.comments = new Comments(config);
  }
}