import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  @Input() voteCount = 10;
  @Input() myVote = 0;
    
  @Output() vote = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  
  voteup() {
   if(this.myVote == 1)
      return;

      this.myVote ++;
      this.vote.emit({myVote : this.myVote});
  }
    
  votedown() {
   if(this.myVote == -1)
      return;

      this.myVote --;
      this.vote.emit({myVote : this.myVote}); 
  }
}
