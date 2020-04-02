import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bugoff';
  public status:string;
  constructor(){
    this.status = 'error';
  }



  
}
