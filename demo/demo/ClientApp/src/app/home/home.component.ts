import { Component } from '@angular/core';
import { MessageServiceService } from '../message-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public MessageData: Array<any>;
  public currentJogging: any;

  constructor() {
    //messageService.get().subscribe((data: any) => this.MessageData = data);
  }
}
