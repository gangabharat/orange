import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BsModalService } from "ngx-bootstrap/modal";
import { Product } from "src/app/product/product.model";
import { ProductService } from "src/app/product/product.service";

@Component({
  selector: "app-contact-detail",
  templateUrl: "./contact-detail.component.html",
  styleUrls: ["./contact-detail.component.css"],
})
export class ContactDetailComponent implements OnInit {
  @Input() product: Product;
  @Input() news: any;
  id : string;
  constructor(
    private bsModalService: BsModalService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    //const id = this.route.snapshot.params["id"];

    // console.log(this.route);

    // const findProduct = this.productService.get().filter((x) => {
    //   x.id === this.id;
    // });

    // if (findProduct) {
    //   this.product = findProduct[0];
    // }
    //console.log(this.productService.get().fiiin);
  }

  onClose() {
    //this.bsModalService.hide(1);
    this.bsModalService._hideModal(1);
    //this.bsModalService.h
  }
}
