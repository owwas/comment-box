import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comment = '';
  postComment = [];

  constructor() {}

  post() {
    this.postComment.push(this.comment);
    this.comment = '';
  }

  ngOnInit(): void {}
}
