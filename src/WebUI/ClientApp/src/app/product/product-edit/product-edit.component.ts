import {
  AfterContentInit,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Product } from "../product.model";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { ProductService } from "../product.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/_store/app.reducer";
import { UpdateProduct } from "../store/product.action";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"],
})
export class ProductEditComponent implements OnInit {
  @Input() product: Product;
  loadProduct: Product;
  newListModalRef: BsModalRef;
  faEdit = faEdit;
  public loading = false;

  constructor(
    private productService: ProductService,
    private modalService: BsModalService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    //console.log(this.product);
    this.loadProduct = { ...this.product };
  }

  showModal(template: TemplateRef<any>): void {
    //console.log(this.product);

    this.newListModalRef = this.modalService.show(template, {
      focus: true,
      class: "modal-lg",
      ignoreBackdropClick: true,
    });
  }
  newListCancelled(): void {
    this.newListModalRef.hide();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.valid) {
      this.loading = true;
      const product = form.value.product as Product;
      console.log(product);
      this.productService.updatePuppy(product);
      this.store.dispatch(
        new UpdateProduct({ index: 1, product: product })
      );

      this.newListCancelled();

      setTimeout(() => {
        this.loading = false;
        form.resetForm();
      }, 1000 * 2);
    }
  }
}
