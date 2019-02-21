import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
  public MessageData: any[];

  constructor(private httpService: HttpClient) {
    this.GetMessages();
    
  }
  GetMessages() {
    this.httpService.get('https://localhost:44386/api/Messages').subscribe(
      data => {
        this.MessageData = data as any[];
      });
  }
  }

