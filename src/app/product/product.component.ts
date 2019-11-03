import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  public products: Array<ProductModel> = new Array<ProductModel>();

  constructor() {}

  ngOnInit() {
    this.products.push(new ProductModel(10,"Dettol"));
    this.products.push(new ProductModel(10,"Durex"));
  }

}
