import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { CacheService } from "../_shared/cache.service";
import { NotificationService } from "../_shared/notification.service";
import { Product } from "./product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  // Make _puppiesSource private so it's not accessible from the outside,
  // expose it as puppies$ observable (read-only) instead.
  // Write to _puppiesSource only through specified store methods below.
  private readonly _puppiesSource = new BehaviorSubject<Product[]>([]);
  //private readonly _puppiesSource = new BehaviorSubject<Puppy[]>([]);

  // Exposed observable (read-only).
  readonly puppies$ = this._puppiesSource.asObservable();

  constructor(private ns: NotificationService, private cs: CacheService) {   
  }

  // Get last value without subscribing to the puppies$ observable (synchronously).
  get(): Product[] {
    return this._puppiesSource.getValue();
  }

  private _setPuppies(puppies: Product[]): void {
    //this.cs.save({ key: "Products", data: puppies });
    this._puppiesSource.next(puppies);
  }

  load(puppy: Product[]): void {
    const puppies = [...this.get(), ...puppy];
    this._setPuppies(puppies);
  }

  add(puppy: Product): void {
    this.ns.success(puppy.id, `Successfully added product ${puppy.name}`);
    const puppies = [...this.get(), puppy];
    this._setPuppies(puppies);
  }

  updatePuppy(puppy: Product): void {
    this.ns.info(puppy.id, `Successfully updated product ${puppy.name}`);
    const puppies = this.get().map((obj) =>
      obj.id === puppy.id ? puppy : obj
    );
    this._setPuppies(puppies);
  }

  removePuppy(puppy: Product): void {
    this.ns.info(puppy.id, `Successfully deleted product ${puppy.name}`);
    const puppies = this.get().filter((p) => p.id !== puppy.id);
    this._setPuppies(puppies);
  }
}
