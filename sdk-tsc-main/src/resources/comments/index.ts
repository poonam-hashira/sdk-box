import { Base } from '../base';
import { Comment, NewComment } from './types';

const resourceName = 'comments';

export class Comments extends Base {

  getById(id: number): Promise<Comment> {
    return this.request(`/${resourceName}/${id}`);
  }

  getAll(): Promise<Comment[]> {
    return this.request(`/${resourceName}`);
  }

  save(data: NewComment): Promise<Comment> {
    return this.request(`/${resourceName}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}