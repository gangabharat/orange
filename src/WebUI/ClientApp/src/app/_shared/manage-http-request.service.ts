import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageHttpRequestService {

  public requestStatus: boolean = false;

  public httpLoader = new EventEmitter<boolean>();

  constructor() {     
  }

  setLoaderStatus(loadStatus : boolean ){
    this.httpLoader.emit(loadStatus);
  }

}
