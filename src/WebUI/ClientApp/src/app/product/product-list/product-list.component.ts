import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../product.model";
import { ProductService } from "../product.service";
import { faEdit , faThumbsUp , faHeart, faSpinner} from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/_store/app.reducer";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  public products$ = new Observable<Product[]>();
  products: any = [];
  faEdit = faEdit;
  faThumbsUp = faThumbsUp;
  faHeart = faHeart;
  faSpinner = faSpinner;
  public currentCount = 0;

  public sampleString = `Some time prior to May 2016, <a href=\"https://motherboard.vice.com/read/rosebuttboard-ip-board\" target=\"_blank\" rel=\"noopener\">the forum known as &quot;Rosebutt Board&quot; was hacked</a> and 107k accounts were exposed. The self-described &quot;top one board for anal fisting, prolapse, huge insertions and rosebutt fans&quot; had email and IP addresses, usernames and weakly stored salted MD5 password hashes hacked from the IP.Board based forum.`;
  constructor(private productService: ProductService, private store : Store<AppState>) {}

  ngOnInit(): void {
    //this.loadProducts();
    this.products$ = this.productService.puppies$;

    this.store.select("products").subscribe((res) => {
      //console.log(res.products);
      this.products = res.products;
      //res.product
    });
    // this.store.select("products").subscribe((res) => {
    //   this.products = res;
    // });
    //this.productService.removePuppy();

    const res = !this.currentCount;
  }

  onRemove(product: Product) {
    //console.log(product);
    //this.productService.removePuppy(product);
  }

  getRandom(value: number) {
    return value * Math.random() * 100;
  }



  public incrementCounter() {
    this.currentCount++;
  }
}
