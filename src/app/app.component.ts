import { Component } from '@angular/core';
import { UiService } from './services/ui.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title:string = 'sengithub-search';
darkTheme:boolean = false;

constructor(){
    //set default theme
    UiService.userProfile = {
      themeDark: false
    }
  }
}