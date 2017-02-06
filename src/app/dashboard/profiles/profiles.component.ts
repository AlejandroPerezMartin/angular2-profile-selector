import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { Profile } from '../../_models/profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {

  private profile: Profile;

  item: FirebaseObjectObservable<any[]>;

  constructor(private af: AngularFire) {
    this.item = af.database.object('/profiles');
  }

  create() {
    const itemObservable = this.af.database.object('/profiles');
    itemObservable.$ref.push(this.profile);
  }

}
