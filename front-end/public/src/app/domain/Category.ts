export class Category {
  public id: string;
  public name: string;
  public updateAt: Date;
  public createdAt: Date;
  public image: string;

  constructor(id, name, updateAt, createdAt, image) {
    this.id = id;
    this.name = name;
    this.updateAt = updateAt;
    this.createdAt = createdAt;
    this.image = image;
  }
}
