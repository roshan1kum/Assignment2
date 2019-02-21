import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CommentsComponent } from './comments/comments.component';
import { MessageBoardComponent } from './message-board/message-board.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { MessageServiceService } from './message-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    
    CommentsComponent,
    MessageBoardComponent,
    AddMessageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'message-board', component: MessageBoardComponent },
      { path: 'add-message', component: AddMessageComponent }
    ])
  ],
  providers: [MessageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
