import { Injectable, OnInit, EventEmitter } from "@angular/core";
import { Bible } from "../bible/bible";

import { HttpClientService } from "../shared/http-client.service";

@Injectable({
  providedIn: "root",
})
export class BibleService {
  data: Bible;
  private _bibleLanguage = "english";
  private _bibleLanguagePath = "assets/bible/english/bible.json";
  constructor(private _http: HttpClientService) {}

  public bibleLanguages: string[] = [
    "afrikaans",
    "bengali",
    "english",
    "gujarati",
    "hindi",
    "indonesian",
    "kannada",
    "malayalam",
    "nepali",
    "oriya",
    "punjabi",
    "sepedi",
    "tamil",
    "telugu",
    "xhosa",
    "zulu",
  ];

  set BibleLanguage(value: string) {
    //let initialPath = `assets/bible/${this.initialLanguage}/bible.json`;
    let selectedBible = this.bibleLanguages.find(
      (lang) => lang == value.toLowerCase()
    );
    if (selectedBible) {
      this._bibleLanguagePath = `assets/bible/${selectedBible}/bible.json`;
      this._bibleLanguage = selectedBible;
    }
    //return initialPath;
  }

  get BibleLanguage() {
    return this._bibleLanguage;
  }

  getBible() {
    return this._http.get<Bible>({
      url: this._bibleLanguagePath,
      cacheMins: 0,
    });
  }
}
