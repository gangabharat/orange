import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { faPlus, faSave, faEye } from "@fortawesome/free-solid-svg-icons";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  newListModalRef: BsModalRef;
  @Input() product: Product;
  faPlus = faPlus;
  faSave = faSave;
  faEye = faEye;
  loading = false;

  constructor(
    private productService: ProductService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {}

  showModal(template: TemplateRef<any>): void {
    this.newListModalRef = this.modalService.show(template, {
      focus: true,
      ignoreBackdropClick: true,
    });
  }
  newListCancelled(): void {
    this.newListModalRef.hide();
  }
}
