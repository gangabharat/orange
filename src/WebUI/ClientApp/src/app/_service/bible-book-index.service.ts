import { Injectable } from "@angular/core";
import { Bible, BibleBookIndex } from "../bible/bible";
import { HttpClientService } from "../shared/http-client.service";

@Injectable({
  providedIn: "root",
})
export class BibleBookIndexService {
  private _bibleLanguagePath = "assets/bible/bible-book-info.json";
  constructor(private _http: HttpClientService) {}

  getBibleBookIndex() {
    return this._http.get<BibleBookIndex[]>({
      url: this._bibleLanguagePath,
      cacheMins: 0,
    });
  }
}
