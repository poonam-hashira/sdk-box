import { Base } from "../base";
import { NewPhoto, Photo } from "./types";

const resourceName = "photos";

export class Photos extends Base {
  getById(id: number): Promise<Photo> {
    return this.request(`/${resourceName}/${id}`);
  }

  getAll(): Promise<Photo[]> {
    return this.request(`/${resourceName}`);
  }

  save(newPost: NewPhoto): Promise<Photo> {
    return this.request(`/${resourceName}`, {
      method: "POST",
      body: JSON.stringify(newPost),
    });
  }
}
