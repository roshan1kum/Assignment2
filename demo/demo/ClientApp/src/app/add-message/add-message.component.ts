import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  constructor(private service: MessageServiceService) { }

  ngOnInit() {
   // this.resetForm();
  }


  //resetForm(form?: NgForm): any {
  //  if (form != null)
  //    form.resetForm();
  //  this.service.messageData = {
  //    message:'',
  //    Id: 0,
  //    comments: '',
  //    count: 0
  //  }
  //}

  onSubmit(form: NgForm) {
    this.service.postMessage(form.value).subscribe()
     
      
  }

}
