import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from "redux"
import * as productActions from "../../redux/actions/productActions"
import {Table,Button,Badge} from "reactstrap"
import * as cartActions from "../../redux/actions/cartActions"
import alertify from "alertifyjs"

 class ProductList extends Component {
     componentDidMount(){
        this.props.actions.getProducts();
     }

     addToCart = (product) => {
       this.props.actions.addToCart({quantity:1,product})
       alertify.success(product.productName +  " added to cart")
     }
    render() {
        return (
            <div>
            <h1><Badge>Product List</Badge>--<Badge color="success">{this.props.currentCategory.categoryName}</Badge></h1>
            <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity Per Unit</th>
                <th>Stock</th>
                <th>Product Price</th>
                <th></th>
\              </tr>
            </thead>
            <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>{product.unitPrice}$</td>
              <td><Button onClick={()=>this.addToCart(product)} color="success">Add</Button></td>
            </tr>
            ))}
             
            </tbody>
          </Table>
            </div>
        )
    }
}
function  mapDispatchToProps(dispatch){
    return {
        actions:{
            getProducts: bindActionCreators(productActions.getProducts,dispatch),
            addToCart: bindActionCreators(cartActions.addToCart,dispatch)
           
        }
    }
   }


function  mapStateToProps(state){
    return {
      currentCategory: state.changeCategoryReducer,
       products: state.productListReducer,
       cart : state.cartReducer
    
    }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(ProductList);