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
          img: "https://m.media-amazon.com/images/I/61nPiOOv9BL._SL1500_.jpg",
          id: 1
        },
        {
          price: 999,
          title: " Phone",
          qty: 1,
          img: "https://www.zdnet.com/a/img/resize/b2677166f21490f76917908d251bdc3365525d65/2021/04/19/16cfc8be-eaf5-4e37-b1f9-ec3e13d1081c/image-2.jpg?width=1200&height=900&fit=crop&auto=webp",
          id: 2
        },
        {
          price: 999,
          title: "Mobile ",
          qty: 1,
          img: "https://i.gadgets360cdn.com/products/large/micromax-in-2b-1-414x800-1627626668.jpg?downsize=240:*&output-quality=80&output-format=webp",
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
  handleTotalPrice = () => {
    const { products } = this.state;
    let cartCount = 0;
    products.map((product) => {
      cartCount += product.qty * product.price
    })
    return cartCount;
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
        <div style={{ fontSize: 30, padding: 20 }}>
          Total Price : {this.handleTotalPrice()}
        </div>
      </div>
    );
  }
}

export default App;
