export class Cart {
    user_id: String;
    p_id: String;
    quantity: Number;
    pname: String;
    pvalue: Number;
    pimage: String
}

export class Order {
    name: String;
    email: String;
    mobilenum: String;
    address: String;
    user_id: String;
    total: String;
    orderproduct: Array<Cart>
}

