import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserSettings } from '../../pages/userSettings/user-settings';

@IonicPage()
@Component({
    selector: 'user-info-header',
    templateUrl: 'user-info-header.html',
    styleUrls: ['/user-info-header.scss']
})
export class UserInfoHeader {

    public userName: string;
    public userImagePath: string;

    compact = false;

    constructor(public navController: NavController) {
        let user = sessionStorage.getItem("loginName");
        this.userName = user;
        this.userImagePath = "./assets/images/avatar/0.jpg";
    }

    public changeHeader(compact: boolean) : void {
        this.compact = compact;
    }

    public openUserSettings() : void {
        console.log("user-info");
        this.navController.push(UserSettings);
    }

}
