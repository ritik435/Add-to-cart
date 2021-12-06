import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



const Navbar = (props) => {

    return (
        <div>
            <div style={styles.nav}>

                <div style={styles.cartIcon}>
                    <Badge color="secondary" badgeContent={props.onProductCount()}>
                        <ShoppingCartIcon />
                    </Badge>

                </div>
            </div>
        </div>
    );
}

const styles = {
    nav: {
        display: 'block',
        padding: 30,
        backgroundColor: 'skyblue',
    },
    cartIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        fontSize: '1.5rem'

    }

}
export default Navbar;