import { Photos } from './resources/photos';
import { Comments } from './resources/comments';
export declare class SDKApplication {
    photos: Photos;
    comments: Comments;
    constructor(config: {
        authToken: string;
        baseUrl?: string;
    });
}
