import { Component, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent {

  public MessageData: Array<any> = [];
  public aa: Array<any> = [];
  Id: number = 1;

  constructor(private httpService: HttpClient, private router: Router, private route: ActivatedRoute,private http:Http) {
    this.getmessage();
    //this.aa = this.getMessage(1);

    //if (this.route.snapshot.params['id']) {
    //  this.Id = this.route.snapshot.params['id'];
    //}
    //this.getMessage(this.Id);

  }
  getmessage() {
    this.httpService.get('https://localhost:44386/api/Messages').subscribe(
      data => {
        this.MessageData = data as Array<any>[];
      }
    );
  }
  getMessage(msgid):Array<any> {
    this.httpService.get('https://localhost:44386/api/Messages/'+msgid).subscribe(
      data => {
        this.aa = data as Array<any>[];
      }
    );
    return this.aa;
  }



  AddLike(msgid) {
    //console.log(this.Id);
    this.aa = this.getMessage(msgid); 
    //console.log(this.aa["count"]);
    //if (this.aa["id"] > 1) {
    //  console.log(this.aa["count"]);
      this.aa["count"]+=1;
      this.http.put('https://localhost:44386/api/Messages/' + msgid, this.aa).subscribe((response: Response) => {
        this.router.navigate(['/message-board']);
      });
    }
 
      //this.aa["count"]++;
      //this.http.put('https://localhost:44386/api/Messages/' + msgid, this.aa).subscribe((response: Response) => {
      //  this.router.navigate(['/fetch-data']);
      //});
    

    //this.router.navigate(['/add-message']);
    //this.httpService.put('https://localhost:44386/api/Messages/' + msgid, this.aa).subscribe(() => {
    //  this.router.navigate(['/message-board'])
    //});
 

  AddComment() {
    this.router.navigate([`/comments`]);
  }

      //console.log(this.MessageData["count"]);
      //this.httpService.put('https://localhost:44386/api/Messages/' + msgid, this.MessageData).subscribe(() => {
      //  this.router.navigate(['/message-board']);
      //});
   
}
