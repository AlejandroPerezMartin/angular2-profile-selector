import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { User } from '../_models/user';

@Injectable()
export class AuthService {

  public users: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.users = af.database.object('users');
    console.log(this.users);
  }

  create(user: User) {
    return user;
  }

  update(user: User) {
  }

  delete(userId: number) {
  }

}
