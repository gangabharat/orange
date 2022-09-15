import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Contact } from "./Contact.model";

@Injectable({
  providedIn: "root",
})
export class ContactsService {
  
  // Make _puppiesSource private so it's not accessible from the outside,
  // expose it as puppies$ observable (read-only) instead.
  // Write to _puppiesSource only through specified store methods below.
  private readonly _puppiesSource = new BehaviorSubject<Contact[]>([]);
  //private readonly _puppiesSource = new BehaviorSubject<Puppy[]>([]);

  // Exposed observable (read-only).
  readonly puppies$ = this._puppiesSource.asObservable();

  private puppies: Contact[] = [];
  private allPuppies: Contact[] = [];

  constructor() {}

  // Get last value without subscribing to the puppies$ observable (synchronously).
  get(): Contact[] {
    return this._puppiesSource.getValue();
  }

  private _setPuppies(puppies: Contact[]): void {
    this._puppiesSource.next(puppies);
  }

  load(puppy: Contact[]): void {
    this.allPuppies = puppy;
  }

  loadMore() {
    if (this.getNextPuppies()) {
      this._setPuppies(this.puppies);
    }
  }

  add(puppy: Contact): void {
    const puppies = [...this.get(), puppy];
    this._setPuppies(puppies);
  }

  updatePuppy(puppy: Contact): void {
    const puppies = this.get().map((obj) =>
      obj.id === puppy.id ? puppy : obj
    );
    this._setPuppies(puppies);
  }

  removePuppy(puppy: Contact): void {
    const puppies = this.get().filter((p) => p.id !== puppy.id);
    this._setPuppies(puppies);
  }

  private getNextPuppies(): boolean {
    if (this.puppies.length >= this.allPuppies.length) {
      return false;
    }
    const remainingLength = Math.min(
      5,
      this.allPuppies.length - this.puppies.length
    );
    this.puppies.push(
      ...this.allPuppies.slice(
        this.puppies.length,
        this.puppies.length + remainingLength
      )
    );
    return true;
  }
}
