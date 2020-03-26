export class Category {
  private id: string;
  private name: string;
  private updateAt: Date;
  private createdAt: Date;
  public image: string;

  constructor(id, name, updateAt, createdAt, image) {
    this.id = id;
    this.name = name;
    this.updateAt = updateAt;
    this.createdAt = createdAt;
    this.image = image;
  }
}
