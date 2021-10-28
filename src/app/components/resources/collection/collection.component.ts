import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toWebinar() {
    this.router.navigate(['/Resources/webinar']);
  }


}
