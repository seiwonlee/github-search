import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public static userProfile:Profile
  constructor() {
  }
  get userProfile(){
    return UiService.userProfile;
  }
  set userProfile(input){
    UiService.userProfile.themeDark = input.themeDark;
  }
}