import React from "react";

const CartItem = (props) => {

    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    return (
        <div className="cart-item" >
            <div className="left-block" >
                <img style={styles.image} />
            </div>
            <div className="right-block" style={styles.right}>
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: "#777" }}>Rs {price}</div>
                <div style={{ color: "#777" }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    <img
                        alt="increase"
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        className="action-icon"
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img
                        alt="decrease"
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        className="action-icon"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img
                        alt="delete"
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                        className="action-icon"
                        onClick={() => onDeleteProduct(product.id)}

                    />
                </div>
            </div>
        </div>
    )

}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: "#ccc"
    },
    right: {


    }
}
export default CartItem;