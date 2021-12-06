import Cart from "./Cart";
import Navbar from "./Navbar";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [

        {
          price: 999,
          title: "Mobile Phone",
          qty: 1,
          img: "",
          id: 1
        },
        {
          price: 999,
          title: " Phone",
          qty: 1,
          img: "",
          id: 2
        },
        {
          price: 999,
          title: "Mobile ",
          qty: 1,
          img: "",
          id: 3
        }

      ]
    }
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: products
    })
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 1) {
      this.handleDeleteProduct(product.id);
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }
  handleProductCount = () => {
    let count = 0;
    const { products } = this.state;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar
          onProductCount={this.handleProductCount}
        />

        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
