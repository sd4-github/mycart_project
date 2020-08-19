import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
let MyNavbarComponent = class MyNavbarComponent {
    constructor(breakpointObserver, storagesrvc, router) {
        this.breakpointObserver = breakpointObserver;
        this.storagesrvc = storagesrvc;
        this.router = router;
        this.productData = [
            { image: 'assets/images/Lenovo.jpeg', id: 1, name: 'Lenovo', price: '30000', desc: 'Lenovo V145-AMD-A6 15.6 inch HD Thin and Light Laptop (8GB RAM/ 500GB HDD/ Windows 10 Home with Lifetime Validity/ Black/ 2.1 kg)', ram: '8gb', os: 'Windows 10', processor: 'intel', graphics: 'Nvidea' },
            { image: 'assets/images/Dell.jpeg', id: 2, name: 'Dell', price: '₹25000', desc: 'Dell Vostro 3581 15.6-inch HD Laptop (7th Gen Core i3-7020U/4GB/1TB HDD/Windows 10 + MS Office/Intel HD Graphics/Black)', ram: '4gb', os: 'windows 10', processor: 'intel core i3', graphics: 'Intel hd graphics' },
            { image: 'assets/images/Hp.jpeg', id: 3, name: 'Hp', price: '₹20000', desc: 'HP Pavilion 14-inch Laptop (9th Gen A4-9125/4GB/1TB HDD/Win 10/MS Office 2019/AMD Radeon R3 Graphics), 14-cm0123au', ram: '4gb', os: 'windows 10', processor: 'intel', graphics: 'Raedon' },
            { image: 'assets/images/Hp.jpeg', id: 4, name: 'Hp', price: '₹30000', desc: 'HP Pavilion 14-inch Laptop (9th Gen A4-9125/4GB/1TB HDD/Win 10/MS Office 2019/AMD Radeon R3 Graphics), 14-cm0123au', ram: '4gb', os: 'windows 10', processor: 'intel', graphics: 'Raedon' },
            { image: 'assets/images/Hp.jpeg', id: 5, name: 'Hp', price: '₹40000', desc: 'HP Pavilion 14-inch Laptop (9th Gen A4-9125/4GB/1TB HDD/Win 10/MS Office 2019/AMD Radeon R3 Graphics), 14-cm0123au', ram: '4gb', os: 'windows 10', processor: 'intel', graphics: 'Raedon' },
            { image: 'assets/images/Hp.jpeg', id: 6, name: 'Hp', price: '₹25000', desc: 'HP Pavilion 14-inch Laptop (9th Gen A4-9125/4GB/1TB HDD/Win 10/MS Office 2019/AMD Radeon R3 Graphics), 14-cm0123au', ram: '4gb', os: 'windows 10', processor: 'intel', graphics: 'Raedon' },
            { image: 'assets/images/Hp.jpeg', id: 7, name: 'Hp', price: '₹35000', desc: 'HP Pavilion 14-inch Laptop (9th Gen A4-9125/4GB/1TB HDD/Win 10/MS Office 2019/AMD Radeon R3 Graphics), 14-cm0123au', ram: '4gb', os: 'windows 10', processor: 'intel', graphics: 'Raedon' },
            { image: 'assets/images/Hp.jpeg', id: 8, name: 'Hp', price: '₹19000', desc: 'HP Pavilion 14-inch Laptop (9th Gen A4-9125/4GB/1TB HDD/Win 10/MS Office 2019/AMD Radeon R3 Graphics), 14-cm0123au', ram: '4gb', os: 'windows 10', processor: 'intel', graphics: 'Raedon' },
            { image: 'assets/images/Hp.jpeg', id: 9, name: 'Hp', price: '₹21000', desc: 'HP Pavilion 14-inch Laptop (9th Gen A4-9125/4GB/1TB HDD/Win 10/MS Office 2019/AMD Radeon R3 Graphics), 14-cm0123au', ram: '4gb', os: 'windows 10', processor: 'intel', graphics: 'Raedon' }
        ];
        //angular material
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(result => result.matches), shareReplay());
        this.token = this.storagesrvc.getToken();
    }
    onLogout() {
        this.storagesrvc.destroyToken();
        this.router.navigate(['/login']);
    }
};
MyNavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-my-navbar',
        templateUrl: './my-navbar.component.html',
        styleUrls: ['./my-navbar.component.css']
    })
], MyNavbarComponent);
export { MyNavbarComponent };
//# sourceMappingURL=my-navbar.component.js.map