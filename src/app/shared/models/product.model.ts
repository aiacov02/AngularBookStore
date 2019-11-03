
export class ProductModel {
  public constructor(private price: number, private name: string) {}

  public get Price() {
    return this.price;
  }

  public get Name() {
    return this.name;
  }
}
