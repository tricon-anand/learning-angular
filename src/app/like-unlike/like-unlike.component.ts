import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-unlike',
  templateUrl: './like-unlike.component.html',
  styleUrls: ['./like-unlike.component.scss']
})
export class LikeUnlikeComponent implements OnInit {
  likeUnlike = false;
  totallikes = 10;
  constructor() { }

  ngOnInit() {
  }

  togglelikeUnlike() {
      this.likeUnlike =!this.likeUnlike;
      if(this.likeUnlike) {
          this.totallikes ++;
          } else {
          this.totallikes --;
          }
  }

}
