import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { MessageDetail } from '../message-detail.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent {
  url: string = "";
  public messageText: any = {};

  public value: MessageDetail;


  constructor(private httpClient:HttpClient,public http: Http, private _router: Router) {
    
  }

  AddMessage():void {
    this.httpClient.post("https://localhost:44386/api/Messages", this.messageText).subscribe(() => {
      this._router.navigate(['/message-board'])
    });
  }
}
///*"https://localhost:44386/api/Messages"*/
