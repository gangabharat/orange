import { Component, Input, OnInit } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { Product } from "src/app/product/product.model";
import { ProductService } from "src/app/product/product.service";

@Component({
  selector: "app-contact-delete",
  templateUrl: "./contact-delete.component.html",
  styleUrls: ["./contact-delete.component.css"],
})
export class ContactDeleteComponent implements OnInit {
  @Input() product: Product;
  loading = false;
  constructor(
    private productService: ProductService,
    private bsModalService: BsModalService
  ) {}

  ngOnInit(): void {}

  onDelete() {
    this.productService.removePuppy(this.product);
    //this.bsModalService.hide(1);
    this.bsModalService._hideModal(1);
  }
  onClose() {
    this.bsModalService._hideModal(1);
  }
}
