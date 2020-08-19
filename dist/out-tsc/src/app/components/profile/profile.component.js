import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProfileComponent = class ProfileComponent {
    constructor(authsrvc, router) {
        this.authsrvc = authsrvc;
        this.router = router;
    }
    ngOnInit() {
        this.showData = this.authsrvc.getAllData();
        console.log(this.showData);
    }
    onLogout() {
        this.authsrvc.destroyToken();
        this.router.navigate(['/login']);
    }
};
ProfileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map