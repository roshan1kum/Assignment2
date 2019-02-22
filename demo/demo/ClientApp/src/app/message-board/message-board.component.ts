import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {

  public MessageData: Array<any> = [];
  public aa: Array<any> = [];

  constructor(private httpService: HttpClient, private router: Router) {

  }
  ngOnInit() {
    this.httpService.get('https://localhost:44386/api/Messages').subscribe(
      data => {
        this.MessageData = data as Array<any>[];
      }
    );
  }

  public getmessage(msgid): Array<any> {
    this.httpService.get('https://localhost:44386/api/Messages/' + msgid).subscribe(data => {
      this.aa = data as Array<any>[];
    });
    return this.aa;
  }


  AddLike(msgid) {
    //this.aa = this.getmessage(msgid);
    this.httpService.get('https://localhost:44386/api/Messages/' + msgid).subscribe(data => {
      this.aa = data as Array<any>[];
    });
    //this.aa["count"]++;
    this.show(this.aa);

    console.log(this.MessageData);
    this.aa["count"]++;
    //this.router.navigate(['/add-message']);
    this.httpService.put('https://localhost:44386/api/Messages/' + msgid, this.aa).subscribe(() => {
      this.router.navigate(['/message-board'])
    });
    
  }
  show(aa:Array<any>) {
    alert(this.aa["count"]);
  }

  AddComment() {
    this.router.navigate([`/comments`]);
  }

      //console.log(this.MessageData["count"]);
      //this.httpService.put('https://localhost:44386/api/Messages/' + msgid, this.MessageData).subscribe(() => {
      //  this.router.navigate(['/message-board']);
      //});
   
}
  

