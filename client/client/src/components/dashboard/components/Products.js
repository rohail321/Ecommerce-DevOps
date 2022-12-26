import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getProducts } from "../../../actions/productAction";
// import Product from "../../general/Product";
// import { decodeUser } from "../../../util";

class Products extends Component {
    state = {
        sellerProducts: [],
      };

//   componentDidMount() {
//     this.props.getInstructorProducts(decodeUser().user.id);
//   }

  // componentWillReceiveProps(nextProps) {
  //   if (
  //     nextProps &&
  //     nextProps.products &&
  //     nextProps.products.products.length > 0
  //   ) {
  //     const sellerProducts = nextProps.products.products;
  //     this.setState({ sellerProducts });
  //   }
  // }

  // productDetails = (product) => {
  //   return (
  //     <ul>
  //       <li>${product.price}</li>
  //       <li>quantity:{product.quantity}</li>
  //     </ul>
  //   );
  // };
  render() {
    // const { sellerProducts } = this.state;
    return (
      <div className="row">
        product
        {/* {sellerProducts.map((product, index) => (
          <Product
            key={index}
            product={product}
            description={this.productDetails(product)}
            uploadImages={`/dashboard/products/${product._id}/addImages`}
            thumbnail={product.thumbnail}
            showBtn={true}
          />
        ))} */}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   products: state.products,
// });
// export default connect(mapStateToProps, { getInstructorProducts })(Products);
export default Products
