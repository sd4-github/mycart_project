import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(route, authsrvc, cartsrvc, productSrvc, router) {
        this.route = route;
        this.authsrvc = authsrvc;
        this.cartsrvc = cartsrvc;
        this.productSrvc = productSrvc;
        this.router = router;
    }
    ngOnInit() {
        console.log(this.productSrvc.productData);
        this.productInfo = this.productSrvc.productData;
        console.log(this.productInfo);
        this.route.params.subscribe(params => {
            console.log(params);
            this.productDetails = this.productInfo.filter((data) => {
                console.log(data._id);
                return data._id == (params.id);
            })[0];
        });
        console.log(this.productDetails);
        console.log('userId:', this.authsrvc.getUserId());
        this.user_id = this.authsrvc.getUserId();
        console.log(this.user_id);
        this.cartsrvc.showcartProduct(this.user_id).subscribe(data => {
            console.log('data:', data);
        });
    }
    goCart(product) {
        console.log(product._id);
        console.log(this.authsrvc.getUserId());
        // this.user_id = this.authsrvc.getUserId();
        // this.cartsrvc.showcartProduct(this.user_id).subscribe(data => {
        //   console.log('data:', data);
        // })
        // this.router.navigate(['cart']);
        // window.alert('Your product has been added to the cart!');
    }
};
ProductDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product-details',
        templateUrl: './product-details.component.html',
        styleUrls: ['./product-details.component.css']
    })
], ProductDetailsComponent);
export { ProductDetailsComponent };
//# sourceMappingURL=product-details.component.js.map