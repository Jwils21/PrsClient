import { Injectable } from '@angular/core';
import { User } from @user/user

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedinuser: User = null;

  constructor() { }
}
