import { Base } from '../base';
import { Comment, NewComment } from './types';
export declare class Comments extends Base {
    getById(id: number): Promise<Comment>;
    getAll(): Promise<Comment[]>;
    save(data: NewComment): Promise<Comment>;
}
