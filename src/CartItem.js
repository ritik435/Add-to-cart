import { render } from "@testing-library/react";
import React from "react";
import react from "react";

class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item" >
                <div className="left-block" >
                    <img style={styles.image} />
                </div>
                <div className="right-block" style={styles.right}>
                    <div style={{ fontSize: 40 }}>Phone</div>
                    <div style={{ color: "#777" }}>Rs 999</div>
                    <div style={{ color: "#777" }}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                    </div>
                </div>
            </div>
        )
    }
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: "#ccc"
    },
    right: {
        height: 110,
        width: 110,


    }
}
export default CartItem;