import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(router, productSrvc, route) {
        this.router = router;
        this.productSrvc = productSrvc;
        this.route = route;
        this.p = 1;
    }
    ngOnInit() {
        this.productSrvc.showProduct().subscribe(data => {
            this.products = data;
            console.log(this.products);
            this.productArray = this.products.data;
            console.log(this.productArray);
            this.productSrvc.productData = this.productArray;
            console.log(this.productSrvc.productData);
        });
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map