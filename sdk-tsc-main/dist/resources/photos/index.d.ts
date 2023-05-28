import { Base } from "../base";
import { NewPhoto, Photo } from "./types";
export declare class Photos extends Base {
    getById(id: number): Promise<Photo>;
    getAll(): Promise<Photo[]>;
    save(newPost: NewPhoto): Promise<Photo>;
}
