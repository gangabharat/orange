import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  OnDestroy,
} from "@angular/core";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";
import { Product } from "./product.model";

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ProductAddComponent } from "./product-add/product-add.component";
import { Store } from "@ngrx/store";
import { AppState } from "../_store/app.reducer";
import * as productActions from "./store/product.action";
import { CacheService } from "../_shared/cache.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit, OnDestroy {
  public products$ = new Observable<Product[]>();
  displayStyle = "none";
  @ViewChild("template") template: TemplateRef<HTMLDivElement>;
  modalRef: BsModalRef;

  options: string[];

  selectedOption: string;

  constructor(
    private productService: ProductService,
    private bsModalService: BsModalService,
    //private productAddComponent: ProductAddComponent
    private store: Store<AppState>,
    private cs: CacheService
  ) {}

  ngOnInit(): void {
    //this.products$ = this.productService.puppies$;

    const data = this.cs.load("Products");
    // Return data from cache
    if (data !== null) {
      //console.log(data);
      this.productService.load(data);
    }

    //this.store.select("")
    // this.store.select("products").subscribe((res) => {
    //   console.log(res.products);
    //   //res.product
    // });
  }

  ngOnDestroy() {
    //alert(3);
    console.log('des');
    this.cs.save({ key: "Products", data: this.productService.get() });
  }

  onAdd() {
    //this.loadProducts();
    this.modalRef = this.bsModalService.show(ProductAddComponent);
  }

  openModal() {
    this.modalRef = this.bsModalService.show(this.template, {
      animated: true,
      backdrop: "static",
    });
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  loadProducts() {
    let products: Product[] = [];
    for (let i = 0; i < 1000; i++) {
      const product: Product = {
        id: `${i * 10 * Math.random()}`,
        address: `${i * 10 * Math.random()}`,
        model: `${i * 10 * Math.random()}`,
        name: `${i * 10 * Math.random()}`,
        number: `${i * 10 * Math.random()}`,
      };
      products.push(product);
    }
    this.store.dispatch(new productActions.AddProducts(products));
    this.productService.load(products);
    //this.productService.add()
    //this.store.dispatch(new productActions.AddProduct(products[0]))
  }
}
