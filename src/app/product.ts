export class Product{
  private price: number;
  private name: string;

  public constructor(price: number, name: string) {
    this.price = price;
    this.name = name;
  }

  public getPrice() {
    return this.price;
  }

  public getName() {
    return this.name;
  }
}
