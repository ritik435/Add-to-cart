import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component {
    render() {
        return (
            <div className="cart-list">
                <CartItem />
                <CartItem />
                <CartItem />

            </div>
        )
    }
}

export default Cart;