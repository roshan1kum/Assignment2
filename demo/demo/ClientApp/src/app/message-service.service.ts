import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { MessageDetail } from './message-detail.model';

@Injectable()
export class MessageServiceService {
  messageData = MessageDetail
  readonly rootURL ="https://localhost:44386/api"
  constructor(private http: HttpClient) { }

  postMessage(messageData: MessageDetail) {
    return this.http.post(this.rootURL + '/Messages', messageData);
  }
}
