import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AddComments() {
    //this.router.navigate(['/message-board']);
  }

}
