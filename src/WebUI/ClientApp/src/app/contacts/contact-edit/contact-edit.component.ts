import { Component, OnInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsModalService } from "ngx-bootstrap";
import { Product } from "src/app/product/product.model";
import { ProductService } from "src/app/product/product.service";

@Component({
  selector: "app-contact-edit",
  templateUrl: "./contact-edit.component.html",
  styleUrls: ["./contact-edit.component.css"],
})
export class ContactEditComponent implements OnInit {
  loading = false;
  hideClose = false;
  parentObject: any;
  @Input() loadProduct: Product;

  constructor(
    private productService: ProductService,
    private bsModalService: BsModalService
  ) {}

  ngOnInit(): void {}

  onClose() {    
    this.bsModalService._hideModal(1);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.valid) {
      this.loading = true;
      const product = form.value.product as Product;
      console.log(product);
      this.productService.updatePuppy(product);
     
      this.onClose();

      setTimeout(() => {
        this.loading = false;
        form.resetForm();
      }, 1000 * 2);
    }
  }
}
