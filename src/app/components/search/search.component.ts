import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {
  }

  ngOnInit(): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://cse.google.com/cse.js?cx=a089a9bc77b5ecb6d';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }

}
